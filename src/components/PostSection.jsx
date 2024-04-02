import React from 'react'
import phnbg from "../assets/phnbg1.png"
import InstagramPost from './InstagramPost'
import postimg from "../assets/Postimg.jpeg"
import postimg2 from "../assets/post2.jpeg"

const PostSection = () => {
  return (
    <div className="flex flex-col justify-center items-center  ">
      <InstagramPost
        image={postimg}
        username="Dikhsha"
        caption="This is a sample caption ashfkf hkbsfjsbf kfbk fkb fksdbgks bgkjdsbgkdsbg  ihafahfjsdh jhsdbgjhsd bghjsbgjhsdg sfkhgbkh habfjbfjhbdf k."
        likes={100}
        comments={20}
      />
      <InstagramPost
        image={postimg2}
        username="username"
        caption="This is a sample caption."
        likes={100}
        comments={20}
      />
      <InstagramPost
        image={postimg}
        username="username"
        caption="This is a sample caption."
        likes={100}
        comments={20}
      />
    </div>
  )
}

export default PostSection
