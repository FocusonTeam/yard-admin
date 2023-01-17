import useLoginRefresh from '../hooks/useLoginRefresh';
export const ERROR_MESSAGE = {
  ADD_CATEGORY_FAILED: "Failed To Add Category",
  ADMIN_ALREADY_EXIST: "Admin Already Exist",
  ADMIN_NOT_FOUND: "Admin Not Found",
  AREA_NOT_FOUND: "Area Not Found",
  ARTICLE_NOT_FOUND: "Article Not Found",
  CATEGORY_NOT_FOUND: "Category Not Found",
  CREATE_ARTICLE_FAILED: "Failed To Create Article",
  CREATE_CONTENT_FAILED: "Failed To Creat Article Content",
  CREATION_FAILED: "Admin Creation Failed",
  DELETE_ARTICLE_FAILED: "Failed To Delete Article",
  EDIT_CATEGORY_FAILED: "Failed To Edit Category",
  LOGIN_FAILED: "Login Failed",
  REMOVE_CATEGORY_FAILED: "Failed To Remove Category",
  TOKEN_REGENERATE_FAILED: "Token Regenerate Failed",
  UPDATE_IMAGE_FAILED: "Failed To Update Image Data",
  UPLOAD_IMAGE_FAILED: "Failed To Upload Image Data",
  VERSION_ALREADY_EXIST: "Version Already Exist",
  CHANGE_STATE_FAILED: "Change Article State Failed",
  FORBIDDEN_RESOURCE: "Forbidden resource",
  ACCESS_TOKEN_EXPIRED: "Login Token Expired",
};


export const handleError = (errorcode: string) => {

  const code = errorcode;
  switch(code){
      case "Article Not Found": 
        console.log("error::", errorcode);
      break;
      case ERROR_MESSAGE.ACCESS_TOKEN_EXPIRED:
        return ERROR_MESSAGE.ACCESS_TOKEN_EXPIRED;

      default:
          console.log("error::", errorcode);
      break;
  }
};
