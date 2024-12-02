import React, { useState } from 'react'
import PostAuthor from '../Components/PostAuthor'
import { Link } from 'react-router-dom'
import '../css/PostDetail.css'
import PostDetailImg1 from '../images/i1.jpeg'
import CommentList from '../Components/CommentList'

function PostDetail() {

    const [comments, setComments] = useState([])

    const createComment = (comment) => {
        setComments([...comments, comment])
    }



    // !!!!!!!!!!!!!!!!!!!!!!!!!!! // 

    const [newCommentContent, setNewCommentContent] = useState('')

    const createCommentfromInput = () => {
        if (!newCommentContent) {

            return;
        }

        const comment = {
            id: Math.floor(Math.random() * 999999),
            content: newCommentContent
        }
        createComment(comment)
        setNewCommentContent('')
    }
    const removeComment = (commentID) => {
        setComments([...comments.filter((comment) => comment.id !== commentID)])

    }

    return (
        <section>
            <div className='container postdetail-container'>
                <div className='postdetail-top'>
                    <PostAuthor />
                    <div className='postdetail-buttons'>

                        <Link className='btn-edit' to={`/posts/id/edit`}>Edit</Link>

                    </div>
                </div>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, repudiandae?</h1>
                <div className="post-detail-img">
                    <img src={PostDetailImg1} alt="" />
                </div>
                <div className="post-detail-des">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, fugit? Delectus sed saepe provident ipsam. Eos iste veniam quae dolorum eveniet harum vero repudiandae saepe accusamus repellendus quos voluptas nemo itaque praesentium, amet quidem nesciunt architecto voluptates ullam, ducimus distinctio maiores nisi. Iure repellendus vero dolore perferendis obcaecati voluptates enim ratione deserunt itaque deleniti esse quos, quidem incidunt. Asperiores quasi nulla aperiam consectetur voluptas enim facere minus eos vitae. Facilis esse dolorum fugit ab? Ipsa laborum sint obcaecati nostrum a velit quod necessitatibus ipsam, repudiandae explicabo quibusdam, laboriosam tempore! Quibusdam, dolorem eum tenetur nihil a ab est facilis sequi, veritatis, id quis? Omnis quisquam dicta porro quis nostrum doloribus, quam illo quasi sed ratione labore ea blanditiis repellat atque neque quae dolorem quaerat sequi officiis accusantium harum perferendis? Aut quisquam delectus aperiam qui sequi eos voluptatibus ipsam adipisci. Iusto consectetur minus veniam nobis? Mollitia ab voluptate harum tempora minus inventore.</p>
                </div>
                <div className='post-detail-container'>
                    <input onChange={(e) => setNewCommentContent(e.target.value)} value={newCommentContent} type="text" placeholder='Write something...' className='post-detail-input' />
                    <button onClick={createCommentfromInput} className='post-detail-btn btn'>Send</button>
                </div>
                <div className="post-detail-comment">
                    <CommentList onRemoveComment={removeComment} comments={comments} />
                </div>
            </div>

        </section>
    )
}

export default PostDetail
