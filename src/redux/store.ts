import {PostsType} from "../Components/Profile/MyPosts/Post/Post";
import {DialogsType} from "../Components/Dialogs/DialogItem/DialogItem";
import {MessageType} from "../Components/Dialogs/Message/Message";
import {addPostActionCreator, setUserProfile, updateNewPostTextActionCreator} from "./profile-reducer";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "./dialogs-reducer";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollow
} from "./users-reducer";

export type MessagesPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
    newMessageText: string
};
export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
    profile: ProfileType
};
export type UserType = {
    id: number
    name: string
    status: string
    photos: { small: string, large: string }
    followed: boolean
    // location: { city: string, country: string }
}

export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: { small: string, large: string }
} | null

export type PostActionType =
    ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof updateNewPostTextActionCreator> |
    ReturnType<typeof setUserProfile>;

export type MessageActionType =
    ReturnType<typeof addMessageActionCreator> |
    ReturnType<typeof updateNewMessageTextActionCreator>;

export type UsersActionType =
    ReturnType<typeof follow> |
    ReturnType<typeof unfollow> |
    ReturnType<typeof setUsers> |
    ReturnType<typeof setCurrentPage> |
    ReturnType<typeof setTotalUsersCount> |
    ReturnType<typeof toggleIsFetching>;


export type ActionTypes = PostActionType | MessageActionType | UsersActionType;