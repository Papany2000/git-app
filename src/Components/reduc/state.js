
let state = {
    container: {
        postData:
            [
                { id: 1, messeg: 'Мне нравится ваш пост', name: 'Pete Y.', src: 'https://cdn.pixabay.com/photo/2016/05/17/22/16/baby-1399332_960_720.jpg', alt: 'foto' },
                { id: 2, messeg: 'Мне нравится ваш пост', name: 'Djon T.', src: 'https://cdn.pixabay.com/photo/2015/06/23/09/13/music-818459__340.jpg', alt: 'foto' },
            ],
    },
    dialogs: {
        dialogsData:
            [
                { id: 1, name: "Сергей", src: "https://media.istockphoto.com/photos/smiling-boy-wearing-glasses-in-studio-picture-id1285993435?b=1&k=20&m=1285993435&s=170667a&w=0&h=qBmxbDpIyyXobCnNncdB3jfxTszG4dEZjMzqWPr0dyw=", alt: "foto", },
                { id: 2, name: "Толя", src: "https://media.istockphoto.com/photos/smiling-boy-wearing-glasses-in-studio-picture-id1285993435?b=1&k=20&m=1285993435&s=170667a&w=0&h=qBmxbDpIyyXobCnNncdB3jfxTszG4dEZjMzqWPr0dyw=", alt: "foto", },
                { id: 3, name: "Саша", src: "https://media.istockphoto.com/photos/smiling-boy-wearing-glasses-in-studio-picture-id1285993435?b=1&k=20&m=1285993435&s=170667a&w=0&h=qBmxbDpIyyXobCnNncdB3jfxTszG4dEZjMzqWPr0dyw=", alt: "foto", },
                { id: 4, name: "Юля", src: "https://media.istockphoto.com/photos/smiling-boy-wearing-glasses-in-studio-picture-id1285993435?b=1&k=20&m=1285993435&s=170667a&w=0&h=qBmxbDpIyyXobCnNncdB3jfxTszG4dEZjMzqWPr0dyw=", alt: "foto", },
            ],
        messagesData: [
            { id: 1, text: "Привет!", src: "", alt: "foto", },
            { id: 2, text: " Давно не виделись.", src: "", alt: "foto", },
            { id: 3, text: "Я очень хочу с вами поговорить", src: "", alt: "foto", },
        ]
    }

}
export let addPost = (postData) => {
    let newPost = {
        id: 4,
        messeg: postData,
        name: 'Рома',
        src: "https://cdn.pixabay.com/photo/2015/06/23/09/13/music-818459__340.jpg",
        alt: 'foto'
    };
    state.container.postData.push(newPost)

}
export default state;