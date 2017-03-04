
$(document).ready(setup);



function setup(){
	stater.checkState();
	$(field_ACC).on("keyup",validateEM);
	$(fieldCPW).on("keyup",checkPW);
	//檢查密碼的動作放在招喚登入畫面的call裡面設定到背景動作。
	/*
    
    termsAccept = $(agree_to_term),
    regSubmit = $(btn_register);
	*/
}

function validateEM(){
	var em=this.value;
	
	function checkStrange(){
			//檢查是否含有奇怪的字元
	}
	
	function validateEMOnLogin(){
		if(checkStrange()){
			//假設未含有奇怪字元
		}else{
			//含有奇怪字元
		}
	}
	
	function validateEMOnReg(){
		if(checkStrange()){
			mem.validateAcc(onValidate);
		}
	}
	
	function onValidate(rst){
		if(rst){
			//帳號已存在		
			}else{
			//帳號不存在
				}
			
	}
	
	if(stater.em_for){
		validateEMOnlogin();
	}else{
		validateEMOnReg();
	}
	

	
}


function checkPW(){
	if($(fieldPW).val()==this.value){
		
	}else{
		
	}
	
}

