import React, {ChangeEvent} from 'react';

export type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}

class ProfileStatus extends React.Component<ProfileStatusType> {
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({editMode: true})
    }
    deActivateEditMode = () => {
        this.setState({editMode: false})
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({status: e.currentTarget.value})
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusType>, prevState: Readonly<ProfileStatusType>) {
        if(prevProps.status !== this.props.status)
        this.setState({status: this.props.status})
    }

    render() {
        return (
            <div>
                <div>
                    {!this.state.editMode &&
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || "Your status:"}</span>}
                </div>
                <div>
                    {this.state.editMode &&
                    <input onChange={this.onStatusChange} autoFocus onBlur={this.deActivateEditMode}
                           value={this.state.status}/>}
                </div>
            </div>
        )
    }
}

export default ProfileStatus;