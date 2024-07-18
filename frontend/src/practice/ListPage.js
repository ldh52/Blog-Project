import React,{ useEffect,useMemo,useState,useRef } from 'react';
import  styled  from 'styled-components';

const StyledBoxDiv=styled.div`
    display:flex;
    justify-content:space-between;
    border:1px solid black;
    padding:10px;
    height:100px;
    margin:20px;
    align-items:center;
`;





const ListPage = () => {

    const[Num,setNum]=useState(6);

    const[post,setPost]=useState({
        id:Num,
        title:"",
        content:""

    });
    const[posts,setPosts]=useState([

        {id:1,title:"제목1",content:"내용1"},
        {id:2,title:"제목2",content:"내용2"},
        {id:3,title:"제목3",content:"내용3"},
        {id:4,title:"제목4",content:"내용4"},
        {id:5,title:"제목5",content:"내용5"},

        

    ]);
    const HandleWrite=()=>{
            setPosts([...posts,{...post,id:Num}]);
            setNum(Num+1);
           
    };
    const handleDelete = (id) => {
        setPosts(posts.filter((post) => post.id !== id));
      };
 
    
    /*
    const ChangeTitle=(e)=>{    
        console.log(e.target.value);
        setPost({title:e.target.value})
    };

    const ChangeContents=(e)=>{
        console.log(e);
        setPost({content:e.target.value})
    };
    */
    const handleForm=(e)=>{
                   //console.log(e.target.name);
                  //console.log(e.target.value);
        //computed property names 문법 키값 동적 할당
        setPost({
            ...post,[e.target.name]:e.target.value});
        console.log(post.title);
        console.log(post.content);


    }


    return (
        <div>
            <h1>리스트 페이지</h1>
            <form>
                <input type="text" placeholder='제목을 입력하세요'value={post.title} onChange={handleForm} name="title"/>
                <input type="text" placeholder='내용을 입력하세요'value={post.content} onChange={handleForm} name="content"/>
                <button type="button" onClick={HandleWrite}>글쓰기</button>
             
            </form>
            <hr/>
            {posts.map((post)=>
            <StyledBoxDiv>
                <div>
                번호:{post.id}
              
                <div/>
                제목:{post.title} 
                <div/>
                내용:{post.content}

                </div>
                
                <button onClick={() => handleDelete(post.id)}>삭제</button>
            </StyledBoxDiv>
                       )
            }
        </div>
    );
};

export default ListPage;

