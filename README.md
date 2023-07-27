# MidTermGG3-BE
## i. Database structure
![structure db](https://i.ibb.co/K9k8JVC/Blank-diagram-1.png)
## ii. API structure

    
## iii. List API request and response

### * Video Tumbnails
```
{
  _id : objectId,
  title : String,
  video_url : String,
  image : String,
}
```
### GET /api/v1/video
  Returns all video in the system.
  * **URL Params**  
  None
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
{
  status: success
  list_videos: [
           {<user_object>},
           {<user_object>},
           {<user_object>},
           {<user_object>}
         ]
}
```

### * Product List
```
{
  _id : objectId,
  title : String,
  link_product : String,
  price_product : Number,
  videoId : objectId
}
```
### GET /api/v1/product/:videoId
  Returns specified product.
  * **URL Params**  
  *Required:* `videoId=[objectId]`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
{
  status: success
  products: [
           {<user_object>},
           {<user_object>},
           {<user_object>},
           {<user_object>}
         ]
}
```
* **Error Response:**  
  * **Code:** 404  
  **Content:** `{ error : "No products found for the given videoId" }`

### * Comment List
```
{
  _id : objectId,
  username : String,
  comment : String,
  timestamp : Date,
  videoId : objectId
}
```
### GET /api/v1/comment/:videoId
  Returns specified comment.
  * **URL Params**  
  *Required:* `videoId=[objectId]`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
{
  status: success
  products: [
           {<user_object>},
           {<user_object>},
           {<user_object>},
           {<user_object>}
         ]
}
```
* **Error Response:**  
  * **Code:** 404  
  **Content:** `{ error : "No comment found" }`

### * Submit Comment
### POST /api/v1/comment/
  Submit a new comment and return success or fail.
  * **URL Params**  
  None
* **Data Body**
```
  {
    username : string,
    comment : string,
    videoId : ObjectId,
  }
```
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
{
  status: success
}
```
* **Error Response:**  
  * **Code:** 404  
  **Content:** `{ error : "failed to add comment" }`

## iv. How to run in local

Clone the repository to your local machine:

    git clone <repository-url>
Navigate to the project folder:

    cd <project-folder>
Install dependencies using npm or yarn:

    yarn add
Set up environment variables

    change file env-example to .env

Start the server:

    yarn start
The API now be running locally at the specified PORT.
