import messageController from '../controllers/message.controller.js';

export const messageRoute = (router) =>{
    
  // router.get('/message', getAllMessageActive);
  router.post('/message', messageController.addMessage);
  router.get('/message/:IdMotel', messageController.getAllMessageInMotel);
  router.get('/chat/:IdRoom', messageController.getAllMessagesUserInMotel);
  router.get('/messageUser/:IdUser', messageController.getUserMessageList);
  router.post('/getMessageByNameUser', messageController.getMessageByNameUser);
  router.post('/createRoom', messageController.createRoom);


} 