<template>
    <div class="header">
        <div class="header-name">后台管理</div>
        <div>
            <el-dropdown>
                <span class="el-dropdown-link">
                    张三<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>个人信息</el-dropdown-item>
                        <el-dropdown-item>退出</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
export default {
    name:"Header"
} 
</script>

<style lang='less' scoped>
    .header{
        display: flex;
        justify-content: space-between;
        padding: 0 36px;
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid #ccc;

        .header-name{
            color: dodgerblue;
            font-weight: bold;
        }
    }
</style>