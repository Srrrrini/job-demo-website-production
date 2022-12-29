import { UnAuthenticatedError } from "../errors/index.js";

const checkPermissions=(requestUser,resourceUserId)=>{
    if(requestUser===resourceUserId){
        return
    }
    throw new UnAuthenticatedError('you do not have access')
}

export default checkPermissions
