<?php

?>
<meta charset="UTF-8"/>
<link rel="stylesheet" type="text/css" href="css/bootstrap.css"/>
<script src="js/bootstrap.js" type="text/javascript" charset="utf-8"></script>
<style type="text/css">
	.input-group{margin-top: 20px;}
	.btn{margin-top: 20px;margin-left: 250px;}
</style>
<div class="container">
	<div class="row">
		<div class="col-lg-3">
			
		</div>
		<div class="col-lg-6">
			<div class="panel panel-default">
  <div class="panel-heading">
    <h3 class="panel-title">登录</h3>
  </div>
  <div class="panel-body">
    <form action="verfication.php" method="post">
    	<div class="input-group">
        <span class="glyphicon glyphicon-user input-group-addon" id="basic-addon1"></span>
        <input type="text" class="form-control" name="Username" placeholder="Username" aria-describedby="basic-addon1">
        </div>
        <div class="input-group">
        <span class="glyphicon glyphicon-lock input-group-addon" id="basic-addon1"></span>
        <input type="text" class="form-control" name="Userpass" placeholder="Upassword" aria-describedby="basic-addon1">
        </div>
    	<input type="submit" value="提交" class="btn"/>
    </form>
  </div>
</div>
		</div>
	</div>
</div>