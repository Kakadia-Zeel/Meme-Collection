import React from 'react';
import Post from './Post';
import './post.css'

const RenderingMeme = ({ memes: memes }) => {

    return (
       <div className="allbody">

            {memes.data && memes.data.map((meme, index) => {
                return (
                    
                    <div key={index+1}  className="inline">
                        <Post imgsrc={meme.url} title={meme.name} bodyText={meme.caption} index={index}
                            id={meme.id} meme={meme}
                        />
                    </div>
                
                )
            }).reverse()}
       
</div>
    )
}

export default RenderingMeme;