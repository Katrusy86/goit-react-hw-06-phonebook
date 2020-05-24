import React from "react";
import alert from './alertMessage.module.css'



const Notification = () => ( 
<div className={alert.alert}>
	<h2 className={alert.alert_title}>{`Contact is already in contacts!`}
<span role="img" arial-label="emoji">
😏
</span>
</h2>
</div>
)

export default Notification;