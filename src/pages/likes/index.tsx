import { Container } from "@components"
import { useLikeStore } from "@store"
import { Card } from "@ui"
import './style.scss'
import { Button } from "antd"
import { DeleteOutlined } from "@ant-design/icons"
import NotFoundIcon from '../../assets/images/not-found.svg' 

function Likes() {
  const { likes, removeLike }: any = useLikeStore()
  console.log(likes)

  return (
    <div>
      <Container>
        <div className="likes-wrapper">
          {likes.length > 0 ? (
            likes.map((like: any, i: number) => (
              <div className="likee" key={i}>
                <Card
                  data={like}
                />
                <Button
                  className="delete-btn"
                  type="text"
                  danger
                  onClick={() => removeLike(like._id)}
                >
                  <DeleteOutlined />
                </Button>
              </div>
            ))
          ) : (
            <div className="not-found">
              <img src={NotFoundIcon} alt="Not Found" />
              <p>No Data Found</p>
            </div>
          )}
        </div>
      </Container>
    </div>
  )
}

export default Likes
