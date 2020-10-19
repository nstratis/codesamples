<template>
  <div id="login-panel" class="panel visible">
    <header class="panel-hdr login">
      <Logo />
    </header>
    <div class="panel-stn">
      <p>Enter your credentials below to login to the application.</p>
      <form method="get">
        <fieldset class="field-grp">
          <Input name="username" label="Username" type="text" />
          <Input name="password" label="Password" type="password" />
          <div class="form-bt">
            <button type="button">Login</button>
          </div>
        </fieldset>
      </form>
    </div>
  </div>
</template>
<script>
import Input from "@/components/form/Input";
import Logo from "@/components/ui/Logo";

export default {
  name: "LoginPanel",
  components: {
    Input,
    Logo
  }
};
</script>
