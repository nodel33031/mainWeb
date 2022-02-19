<template >
  <div class="container pt-5">
        <div class="login">
        <h2>請輸入帳號及密碼進行登入00</h2>
        <form method="post" action="perform_login">
            <!-- <p><span th:unless="${param.error == null}" th:text="帳號或密碼錯誤">登入失敗</span></p> -->
            <i class="fas fa-envelope"></i>
            <input type="text" class="username" name="username" placeholder="帳號" required>
            <div class="tab"></div>
            <i class="fas fa-lock"></i>
            <input type="password" class="password" name="password" placeholder="密碼" required>
            <div class="tab"></div>
            <!-- <input type="hidden" th:name="${_csrf.parameterName}" th:value="${_csrf.token}"/> -->
            <input type="submit" value="登入" class="submit" onclick="location.href='#'">
        </form>
    </div>    
  </div>
</template>
<script>
export default {
  
}
</script>

