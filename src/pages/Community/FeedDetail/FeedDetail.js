import React, { Component } from "react";
import Reply from "./Reply.jsx";
import Furniture from "./Furniture";
import "./FeedDetail.scss";

class FeedDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reply: "",
      replyList: [],
      furniture: [
        {
          link: "https://www.naver.com",
          image:
            "data:image/jpeg;base64,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",
        },
        {
          link: "https://www.naver.com",
          image:
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEhUSEhAVEBAVEBAQFQ8QFRAPDw8QFRUWFhUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0fHR0vLS0tLS0tKy0tLSstLS0tLS0tKy0tLS0tLS0tLSstLS0tLS0rLS0tLS0tLS0tLS0tMP/AABEIARMAtwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAACAQMEBQYABwj/xABAEAACAQIEAwYDBAgDCQAAAAABAgADEQQFEiEGMUETIlFhcZGBobEjMkJSYnKCksHR4fAHFDQWJDNEY6LCw/H/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/EACIRAQEAAgICAgMBAQAAAAAAAAABAhEDIRIxQVEyYXETIv/aAAwDAQACEQMRAD8AvlWOqsVVjiiaZIqw1WKBDAgcFi2hgRQIAARbQ7TrQA0xLRy060BorBIjxEAiAyVgFY+RAKwI7LG2WSSsbZYEVljTrJZWNOsCG6Rl0k1ljLrKiA6Rh6cnukYqLAgOk6SHSdA1iiOKJyiOASK4CGBEAhgQOAhATgIQEBLRbRQItoA2iEQ7RLQAtBIjhEQiA0RBIjpEAiAywgMI8RAYQGGWNssfIjbCBGZY0yyUyxlllEVljDrJjLGXWEQnSdH3WdA0iiOARFEMCRSiEJwEICAoEUThCtA6060W04wEjGLxVOkpeowRBzZjYTO8W8XLhBopL2lY7at+zp+ZPU+UwIxGMxr3aq1Uqb6CAVA8lGwmcstNTHb0OjxZRqNZASv52ugb0vEPGGGV9Dh0N7XIBX3BmcyujTfuH7OoAdiLA/Dr7eMnLhUqHssRTF9wlRSdL+Q6g+U5f6ZOvhi0uHzei9u+Bqay3NtXvJpmRrZSAhUEVF2IDfeBHifHzmeHEFbDMUDEWJ7hPeT9ltiPTeax5d+2bx/T00iARMdkvHdNm0Ygqt/u1gNKN5MLnSfjNfTqq4urAjynWXbmFhAZY6YDQhhljTCSGEaZZQwyxl1klljbLAiMs6OssWBfAQwIIEMSAhCEQQhAWLOE6AjvYTA8WcUu7/5bDtpa9mqjbf8AKp5X8/Gwl1xrnRw1KykdowKrcgW8SPPlPIaT1A2pr2JJ1feW/W9vWYyy+G8cWzw+XKqLU+8CO8DcjfY3A8Dffz5SpwFVcNiCoYFSSabEhdS8wL8rjlvz8oeHzRlYFmCgkd4EtT1eJtuL9feWeKy2hiAQ4Wm5PUKPjqDAMP735zn/AF0Sc2pmuoemW7VdxosrqR/8mfxPEldDpqLpqC19QslYDxHRv0l2kipkOKw4vSrM1Mb6QQ4+F7j5yhzfNqzd2oNRG3fCsdv0t/4RoXT8Y6xexVupGxDf19j4SNjMwo41LPaniVFgw2Wqo6c7f38Rj3I5gaT5bidqPtL4RPKpRw1S50jV42v8xLbI+JsVhWCg3XkEa5VT5eHpKI1i3Mk/O8Wibkevxm5tivb+Hc/GKXdCji1+RRvMEGXBExfBzaWUXFiOhvzHXz5TbGbjBoiNMI+wjTQGWEbYR5hAYShhxOisJ0C8AhCCIYkCiGIIhCAoimdG8Se41uek/SB4n/iFmLV8URqOhBpFjtz5CU2W480j3nIXqttY9us7ODeo7Xvc38r8rfCJk2VviG7o6zlfXbtPfSxfFYept2LG/wCKn3P+0yyy9GIC0+0H692sPADlNTlHAqgBm3PymtwPDyLtpnG5b9O0xk9sFhssxL90EW81bb070Q8Du5uzE+N7z1nD5YF5CE2D8o1V3Pp5BR4FvqB6HY+UiY3gwqtwOtp7CcIBfaV+Lwura0zuz5a6vw8VxvDbouq39JnkXSxDDcfOe75pgF02t0nknFGCFKrfoZ0487bquXJhNbix4dzX/LMrA907MrWII6WInq2ErioocciARPAqOIttzHL0ntHBlQthKRvfu2nfF58lwwjbCOtAaaZMsI2wjzCNtKGGEWK0SBciGI2IayAxCEEQhAISDn9dqeHquu7LTcj2k4QMTTDIwO4Kke4gfN+Jcsdup+M9d4AyRVpKbbkAzyjReoqjrUsP3rT3rh0LRprfoB8pw5Pp6OL7aTDYUAASdTogTL5lxfQw47x/n7Sno/4l4Z20gm/j0mI6PSdIgPTBmYwnEaVBcNJFbPFAvePKJ4VaVqIEgVqYEyubcf0qJIILEeBG8qU/xKoOeRH1ks216afNgApM8d43qBj8Z6PX4ipVU3NrjYzzLixevgZMJ/0nJ+LLU23tPb+Af9FT/at6XNp4e3O49Z7vwbQNPCUVPPs1PpcXnrjyVctAMMwDKhto2RHWjbGUMsJ0V50C1EIQVhCQGphCAIQgGJ1RrD+M4RKi3BHiLQPCsZgxQq16msa6DK9MEagxLsQSOosPSanLMdiatFK1Wu7BwzBEC00CAkXJUX6X5iQ8HgBRx6ahqIrVBvuCneAv7zX8L5DTqYZsM1ycPXrUSmo20ajUpE+N6boZxyy66enDGbZTE8SU1DaKdSrbmxq1goP728pK+dNVu2gaL87dpYeP2l56hX4bamSFw9Ooluh0n4+Mb/2cLbvQpUxe+lVDX8ySLfKZmS3Dv2wGEzqthirLSFYOQFRdasxPQAXuT5D4SVm3FmJ1CnUwD4fUNu27ZC1rXI1ItwPKbvh7JqQxqlVXThUJOkCy4msO6o8CtLUSP+qsmf4v4NauGBt3qVRKwPVVAIqW/YLbeUdfMLv4rx+tmgvbsEdz4qHBPpU1H5yLSzJGNmSmhuRZKCL8wD9JvsPwsq2ZURiLEP1I6biQcZkCBi3+TYN4poIPxvL5TSf521mO2J+49vWxHwtaQTWfEP2DBQSba77i36JO801Hh8i/2ZpXOwNm95n2wdkq1vxMz6H5EIp0gg+diZcbDOWRUUcAe3FEkE6wlxy3tPcsA4VVUcgAPYTw/Kxaqh5/aL9Z65gMVe06xwrSgwDG8PUuI6ZWTZjZjjGNtAbcTpzRZRZCEICmGIBAwhBEISAxFgiFCsFnmWumOp1gL02Yq36L6SQfj/CbDLsPSLCodSVdKqalJ3QsovYOAbPbe2oG3SV3FLaEV77Col/S/P2jmAx6gAeVp5709mMlaNr2/wBVX/dwh/8AVKzMiQp/3is3kTRpj3poG9jI+KzqkgINQagL6etpFwX+899j9kp1aeetRuZm5fTU457rRcNYGnSoqtMHTcsWOotUdt2dmNyxJ6kweLVLKSNwg1EcyQBe1ouWcRYesCyOpC7EAjbwt5SNnGd0kQsWFret5LejXbJ8LsoXTSrutIE6F7lSmqk302YagBewANrS+alVPLEUfjQYn5VRM9lrpVLVqACL3Q1IbWe1zsOVxYy3o45CPPlbwkmV+VuM+DWPy+o6kNiLAgg9hTWkxHUamL226ix9JgOKuzp02RAFQKqKo5AAWA+U2WbZiApsZ5tn9VnIXmWYtbyHL6zeHdY5Op/VZlw3XyYGbfL8b5zF010X9gfE9Za4DFWtO+Ly5/T0vLMRcS0BmRyPFXtNRSqXE2wcMbMMwJA286K06UWAMMRpY4DAMQhABhCRRiLeCDFhEHO8EK9MqTY22MwOGxT6ihPeUlT+sDY/Sej4k7Ty7MqnY4uoehYP8G6+95z5Mdx148rLoxiK71qpTVZFI1u3n0HwnoGU4qkKVke6hbeEzlHIaNdu0VirON7cgw626xrFZFj8MfsyldD602HrzE8879PV3awmIerhKzdmxAuRfoy+Y6yLmGbVqwAZ+6PwjYH18ZpcZkuKcsDhDdt9nTbxsCReZ18sdb/ZN4b7D5ztP255YZNFwLmgoJVDGwbSw8Ntj9RH8bnJV9dNtSHZl5H1EpcFl9Z+6iC523JIEvm4WWkoNSoWLHSSNgp9Jzy1vtqeUmjOYYs7EnY2+cz+LrqzklraQFA6kSxzvEq1TTT2VRby25TOPzM3x49OOeXZ6rXLG/IDkJKwtSQBJGHO87RxrZZJXtabXA1rieeZU1rTZZXW2E0yv7wDBRopMKBp04zoE8GGpjQMMGQOiEDGwYQMKMRbwRFvAaxR2nl/Gi2qdoOg0t+rzB956dijtPPOI1Bex3BNresX0T2e4WxdyANx08jN6WYqCJ4/luMOFq2PIfMXtf8AvwnrGSZhTdR3gQQJ5MpqvXjltnuJMWVB1U9up6DzmLp4kvc6NvDe9vGey4tKDrY2IPzlDVwNBb6VUWHgIldPK/bIZVTYnYaV5kys4ozc3AB2GwHl4zV5riqVNCAQPG22080zPFCq5f8ADyHlGE3duXJlqaRalYgfpHrGBJJw9qes8yRbyEjCenF58hCSMMN4wJLwY3mmV9gBymky6paZ/BCXOENpWWow9S4kjVK3B1NpOVoURMSITOgTwYQjSmGDAeBhCNAwgZFOCLeADFvAbxHKYHiFPtF/WH1m8rnaZHOqV3X9YfWL6J7YrPKBufXY9RAy3N62HI7508ttwOs0ObYPVvMzicJbw9J55ZZqvRnjZdxf/wC1lQjc9bbGxg47iRzYA9OhuflMytQ2sd/laNVMTY2A5Hn4+svhE86kYzG1apN25jfpIVDD3YL0vcxU3O0scPS0rc8zLeozJugx4+zPkRKgS+qUCyMPEfOULKQbHnNYXpOSdjWTcHzkFZPwg3nRzrQ4GW1GVOBMtqMrK0wjyyR5TUGlhRqQJl50ANEhVkDDEZUxxTIpwQxGgYQMBwQrwAY9h6DubKL/AEEIi15SYzClmBtYA3m7TIwi6m7zWvboDM/mqznyZ6mnXjw3dsviaN7yixWEG+01NdJWYuhPPHr1uMtVy0fGQXyu31mnrUZBr0yZvdc/CKijgh1EkmnfaSRStDpUpLSY6ItDaRa2VLU5jfx6y4p049h8P9ZnysauMrOUOFmc2D2J5XFxOxGRYjDb1KZC3trG6/0m+yrB6qi+t/aayrg1ZdLKCNtjvO/HlbO3m5MZL08gwZlvRM1+L4NoPugNNv0eXtKXF8O16O9ta+K8/adtuOkSmZMpNIHLyj9J4FirToxTqToFyrR1TIymOqYaSLw0BJsBc+EdwGXVKvIWX8x/hNTlmVJT3tc+J5mQV+WZEW71XYfl6n1l/Qw6oLKoEdhGTagcah8JiM+wxRiOnMek2jEqbyDm+BWum3PofA+BmM8dxvDLVec11kKsu0u8fhGUlSLGVFVSNp59PTKqa8gVhLPFLaVtYyqZ0xykkKlRLSwwWBJkqOw9GTqGGsZYYXAWHKXGXZRrNyLL1Pj5CJLUuUhOH8Da7keQ9OpluFvH2QAaV2sOnQQVWenGamnlyu7sSpDFMGKojiyoqMw4fo1ua2b8y7GZfHcMVqdyh1r4cmnoQiMgMu008qN1NiCD4HYxJ6Jj8oo1fvIL+I2PvFl2aZTDozkKoJJ5ATU5XkQWzVO835fwj+clZTlaURtux5seZ/kJaLJs0KlTA6R8GNAwgZGjoMK8avELQhxxIzgruN/Feh/rHe1jbuJRDxVCnWFmG4+DLM/mPDjc0IbyOxmjrID6+I2I+Mau45EN5NsfcfymbjK1jlYwOMyVxzQjzttKxsn3npVSv4ofhpIkdqydUb9wmc7xOk5v0xOHy4DYCW+Bylui/E7D5y+FcDlTb2C/UwhWc9FX1Oo+wt9ZZxxLy0GDytV3fe3Tko9ZM7W+ybL+bp+yOv0jAW/3iX9eQ+HKO3vNySOdtpLAf3vEWLacBKg1hiAIV4DgMW8bDRS0DmixtmnQqUrQ9UiGpaKKsCWGha5D7acK0CbriF5HV4d4QTGAximAYAM0AtFaDAB40RHjAIgNERCI4YJEoRRHlEbWOAyDrTopgwFiM0QmNuYB9pOV73keodolNoDlWt3rdAoPvOlfiKt6jD9FP4xIFlTxAqIHHh8+sVqthKvAVtFR6XRh2if+Q+Bt7yS7XtAlU6hkhJFpG8lrAeSHADRdUAjBJnEwSYAsYN4pMG8BTBM5nA3NgPE7CQK+c4ZPvV0H7QP0jehMgyobijBD/mF9n/lH8NneFqfcrox8NVj7GTyhpYCGDGQ4O4Nx4jcQwZQd4hMG8EtAUmNtOZo0zwOq8o0GjderYH0jCVrwGw16z/s/SLGsI16z+i/SdAi5piezK1RzQ6iOd0OzW+G/wlvRrBhcHY7zNjFCth0qcrrZh0v1uJK4YxF6bU7702K/s81+W3wgaSjUktHlLhqm8sadSUTg8NWkRXjmuQSC0HVI3a35RrHY1aKaj6AeJgt0ls3v4QHuetvTnIGVYs1AzHxEmFos+yWWbhhsvpMbsus+Lkv9YaYSkvKmg9FWEWgPVCgkmwAuTIBqYSk3Omh9VWQ62R4RueHp+oUA/KZzGcbqay0qagoXCtUO/X8I5H3A9ZXZnxXjLOwU4emp7hqoVeobjuAHmeZ22Ft5PJdNXRyFaLa6FR6R/JqZ6R8ihP0kxcw0MEqgIW+64/4bn8tzyblz59PCeZpx1jR+JGH6SX+hj+K45NemaVagu42qUzujdDobYjxF9xcTOX6V6kWgM8zPDGf0qtNafa6qgFrG4cDl13I897C1z1l8zzcu4mhtUjL1ID1JHqVJUdiKgsR5SLQq7xvEVre0rsLi7vbyvCH8Xmi4ftajfdUU/dmtOmQ4vxBeqKX4Tao3mRcD6mdIqz4aqE4eqCbgVLjyuATJnCzEYmqAdjTBt5g7fWdOgafCnve8nJOnTQeQxazGdOkDlHlKfipj2a/rj6GLOlx9xjl/GnOHj9l+2foJZmdOjP2cX4QEz/G1VlwzWJFyAbeBIB+pnTpi+nSPKqx394uOWzsN7A2AJJsPjOnTPwAWmDf+sjP/ACnToiLDh6oRiKRBse1pbjzcA/Imek8K4l6lAl2LEVayAnc6VqOqi/XYCLOlntr4WVSRKpnTptlWY5pSYBz2x3/CPqZ06EQswF8Wb9Kf8506dCV//9k=",
        },
      ],
    };
  }

  commentInput = (e) => {
    this.setState({ reply: e.target.value });
  };

  pressForPost = (e) => {
    e.preventDefault();
    const { reply, replyList } = this.state;
    if (reply.length > 0) {
      this.setState({
        replyList: [...replyList, reply],
        reply: "",
      });
    }
  };

  render() {
    return (
      <body className="FeedDetail">
        <div className="container">
          <div className="feedLeft">
            <article className="feedLetfArticle">
              <header className="feedHeader">
                <div className="headerLeft">20평대</div>
                <div>어제</div>
              </header>
              <div className="feedImageWrap">
                <img
                  className="sofa"
                  src="/images/Communityimages/sofa.jpg"
                  alt="MainImage"
                />
              </div>
              <div className="furnitureWrap">
                <ul className="furnitureList">
                  {/* {this.state.furniture.map((furniture)=>{
                   return <Furniture link={furniture.link} image={furniture.image} />
                  }} */}
                  {this.state.furniture.map((furniture, idx) => {
                    return (
                      <Furniture
                        key={idx}
                        link={furniture.link}
                        image={furniture.image}
                      />
                    );
                  })}
                </ul>
              </div>
              <p className="feedPostWrite">1차프로젝트 14기 화이팅!!</p>
              <div className="feedHashTags">
                <ul>
                  {/* map 들어갈 자리  해쉬태그 클릭시 해당 상품 구매 페이지로 넘어가야하기 때문에 링크로 만들었음 */}
                  <li>
                    <a href="">
                      <span>{this.props.hashtags}</span>
                      <span># 위코드</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="views">
                <span className="countViews">조회수1회&nbsp;&nbsp;&nbsp;</span>
                <span className="countReply">댓글 1개&nbsp;&nbsp;&nbsp;</span>
                <span className="countShare">공유 1회&nbsp;&nbsp;&nbsp;</span>
                <button className="report">신고</button>
              </div>
            </article>
            {/* 댓글창  */}
            <section className="feedReplyWrap">
              <h1 className="feedReplyHeader">
                댓글&nbsp;<span className="feedReplyHeaderCount">1</span>
              </h1>
              <form
                className="replyTypingForm"
                action=""
                onSubmit={this.pressForPost}
              >
                <div className="feedReplyProfile">
                  <img
                    className="feedReplyUser"
                    src="data:image/png;base64,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"
                    alt=""
                  />
                </div>
                <div className="feedReplyInput">
                  <input
                    className="replyInput"
                    value={this.state.reply}
                    type="text"
                    placeholder="칭찬과 격려의 댓글은 작성자에게 큰 힘이  됩니다 :)"
                    onChange={this.commentInput}
                  ></input>
                  <button className="submit">등록</button>
                </div>
              </form>
              <ul className="feedReplyList">
                {this.state.replyList.map((reply) => {
                  return <Reply comment={reply} />;
                })}
              </ul>
              <ul className="feedReplyPaginator"></ul>
            </section>
          </div>
          <div className="feedRight">
            <div className="rightSideBar">
              <div className="feedLikes">
                <button className="likeButton">하트</button>
                <button className="scrapButton">스크랩</button>
              </div>
              <div className="feedUserProfile">
                <div className="UserProfilePic">ProfilePic</div>
                <div className="UserProfileWriter">
                  <span>UserID</span>
                  <button>팔로우</button>
                </div>
              </div>
              <div className="pictureTable">
                {/* 네모난모양으로 만들어야하는데 방법을 모르겠음.. */}
                <ul>
                  <li>
                    <a href="/">
                      <img src="" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </body>
    );
  }
}

export default FeedDetail;
