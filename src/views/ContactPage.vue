<template>
  <div class="min-h-screen bg-gradient-to-b from-green-50 via-orange-50 to-yellow-50">
    <!-- 全局导航栏 -->
    <Navigation />

    <!-- 面包屑导航 -->
    <Breadcrumb />

    <!-- 特效组件 -->
    <ParticleBackground :particleCount="40" />
    <MouseFollower />
    <ScrollProgress />
    <BackToTop />

    <!-- Hero Section -->
    <section class="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-orange-50 to-yellow-50">
      <!-- 背景装饰 -->
      <div class="absolute inset-0 bg-gradient-to-br from-[#8BC34A]/20 to-[#FF9800]/20"></div>
      <div class="absolute top-0 right-0 w-96 h-96 bg-[#8BC34A]/20 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-[#FF9800]/20 rounded-full blur-3xl"></div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center max-w-3xl mx-auto" data-aos="fade-up">
          <h1 class="text-5xl md:text-6xl font-bold mb-6">
            <span class="bg-gradient-to-r from-[#8BC34A] to-[#FF9800] bg-clip-text text-transparent">
              联系我们
            </span>
          </h1>
          <p class="text-xl text-gray-600 mb-8">
            无论您是想加盟合作、订餐咨询，还是提出宝贵建议
          </p>
          <p class="text-lg text-gray-500">
            我们都期待与您沟通交流
          </p>
        </div>
      </div>
    </section>

    <!-- 联系方式卡片 -->
    <section class="py-20 relative bg-gradient-to-b from-white to-gray-50">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <!-- 客服电话 -->
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group" data-aos="fade-up" data-aos-delay="0">
            <div class="w-16 h-16 rounded-full bg-gradient-to-br from-[#8BC34A] to-[#FF9800] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3 text-gray-800">客服热线</h3>
            <a :href="`tel:400-8598898`" class="text-2xl font-bold text-[#8BC34A] hover:text-[#FF9800] transition-colors">
              400-8598898
            </a>
            <p class="text-sm text-gray-500 mt-2">周一至周日 9:00-21:00</p>
          </div>

          <!-- 公司地址 -->
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group" data-aos="fade-up" data-aos-delay="100">
            <div class="w-16 h-16 rounded-full bg-gradient-to-br from-[#8BC34A] to-[#FF9800] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3 text-gray-800">总部地址</h3>
            <p class="text-gray-600 leading-relaxed">
              浙江省温州市鹿城区<br />
              南郊街道划龙桥路655号<br />
              第十一层西首
            </p>
            <button @click="navigateToHQ" class="mt-4 text-[#8BC34A] hover:text-[#FF9800] font-semibold transition-colors inline-flex items-center">
              <span>查看地图</span>
              <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>

          <!-- 企业邮箱 -->
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group" data-aos="fade-up" data-aos-delay="200">
            <div class="w-16 h-16 rounded-full bg-gradient-to-br from-[#8BC34A] to-[#FF9800] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3 text-gray-800">企业邮箱</h3>
            <a href="mailto:service@dongchi.com" class="text-[#8BC34A] hover:text-[#FF9800] font-semibold transition-colors break-all">
              service@dongchi.com
            </a>
            <p class="text-sm text-gray-500 mt-2">商务合作请发送邮件</p>
          </div>

          <!-- 营业时间 -->
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group" data-aos="fade-up" data-aos-delay="300">
            <div class="w-16 h-16 rounded-full bg-gradient-to-br from-[#8BC34A] to-[#FF9800] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3 text-gray-800">营业时间</h3>
            <div class="space-y-2">
              <div class="flex justify-between">
                <span class="text-gray-600">午市</span>
                <span class="font-semibold text-gray-800">10:30 - 14:00</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">晚市</span>
                <span class="font-semibold text-gray-800">16:30 - 20:00</span>
              </div>
            </div>
            <p class="text-sm text-gray-500 mt-4">全年无休</p>
          </div>
        </div>

        <!-- 在线留言表单 -->
        <div class="max-w-4xl mx-auto">
          <div class="bg-white rounded-3xl shadow-2xl overflow-hidden" data-aos="fade-up">
            <!-- 表单头部 -->
            <div class="bg-gradient-to-r from-[#8BC34A] to-[#FF9800] p-8 text-white">
              <h2 class="text-3xl font-bold mb-2">在线留言</h2>
              <p class="text-white/90">填写表单提交您的需求，我们将在24小时内回复您</p>
            </div>

            <!-- 表单内容 -->
            <form @submit.prevent="submitForm" class="p-8 md:p-12">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <!-- 姓名 -->
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2">
                    姓名 <span class="text-red-500">*</span>
                  </label>
                  <input
                    v-model="formData.name"
                    type="text"
                    placeholder="请输入您的姓名"
                    class="w-full px-4 py-3 rounded-xl border-2 focus:border-[#8BC34A] focus:ring-2 focus:ring-[#8BC34A]/20 outline-none transition-all"
                    :class="{ 'border-red-500': errors.name }"
                  />
                  <p v-if="errors.name" class="text-red-500 text-sm mt-1">{{ errors.name }}</p>
                </div>

                <!-- 电话 -->
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2">
                    联系电话 <span class="text-red-500">*</span>
                  </label>
                  <input
                    v-model="formData.phone"
                    type="tel"
                    placeholder="请输入您的手机号"
                    class="w-full px-4 py-3 rounded-xl border-2 focus:border-[#8BC34A] focus:ring-2 focus:ring-[#8BC34A]/20 outline-none transition-all"
                    :class="{ 'border-red-500': errors.phone }"
                  />
                  <p v-if="errors.phone" class="text-red-500 text-sm mt-1">{{ errors.phone }}</p>
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <!-- 邮箱 -->
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2">
                    电子邮箱
                  </label>
                  <input
                    v-model="formData.email"
                    type="email"
                    placeholder="请输入您的邮箱（可选）"
                    class="w-full px-4 py-3 rounded-xl border-2 focus:border-[#8BC34A] focus:ring-2 focus:ring-[#8BC34A]/20 outline-none transition-all"
                    :class="{ 'border-red-500': errors.email }"
                  />
                  <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
                </div>

                <!-- 留言主题 -->
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2">
                    留言主题 <span class="text-red-500">*</span>
                  </label>
                  <select
                    v-model="formData.subject"
                    class="w-full px-4 py-3 rounded-xl border-2 focus:border-[#8BC34A] focus:ring-2 focus:ring-[#8BC34A]/20 outline-none transition-all"
                    :class="{ 'border-red-500': errors.subject }"
                  >
                    <option value="">请选择留言主题</option>
                    <option value="franchise">加盟咨询</option>
                    <option value="order">订餐咨询</option>
                    <option value="complaint">投诉建议</option>
                    <option value="cooperation">商务合作</option>
                    <option value="other">其他咨询</option>
                  </select>
                  <p v-if="errors.subject" class="text-red-500 text-sm mt-1">{{ errors.subject }}</p>
                </div>
              </div>

              <!-- 留言内容 -->
              <div class="mb-6">
                <label class="block text-sm font-semibold text-gray-700 mb-2">
                  留言内容 <span class="text-red-500">*</span>
                </label>
                <textarea
                  v-model="formData.message"
                  rows="6"
                  placeholder="请详细描述您的需求或建议..."
                  class="w-full px-4 py-3 rounded-xl border-2 focus:border-[#8BC34A] focus:ring-2 focus:ring-[#8BC34A]/20 outline-none transition-all resize-none"
                  :class="{ 'border-red-500': errors.message }"
                ></textarea>
                <div class="flex justify-between items-center mt-2">
                  <p v-if="errors.message" class="text-red-500 text-sm">{{ errors.message }}</p>
                  <p class="text-sm text-gray-500 ml-auto">{{ formData.message.length }}/500</p>
                </div>
              </div>

              <!-- 隐私协议 -->
              <div class="mb-8">
                <label class="flex items-start cursor-pointer group">
                  <input
                    v-model="formData.agreed"
                    type="checkbox"
                    class="mt-1 w-5 h-5 rounded border-2 border-gray-300 text-[#8BC34A] focus:ring-[#8BC34A]"
                  />
                  <span class="ml-3 text-sm text-gray-600 group-hover:text-gray-800">
                    我已阅读并同意
                    <a href="#" class="text-[#8BC34A] hover:text-[#FF9800] font-semibold">《隐私政策》</a>
                    和
                    <a href="#" class="text-[#8BC34A] hover:text-[#FF9800] font-semibold">《服务条款》</a>
                  </span>
                </label>
                <p v-if="errors.agreed" class="text-red-500 text-sm mt-1 ml-8">{{ errors.agreed }}</p>
              </div>

              <!-- 提交按钮 -->
              <div class="flex gap-4">
                <button
                  type="submit"
                  :disabled="isSubmitting || !formData.agreed"
                  class="flex-1 bg-gradient-to-r from-[#8BC34A] to-[#FF9800] text-white py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  <span v-if="!isSubmitting">提交留言</span>
                  <span v-else class="flex items-center justify-center">
                    <svg class="animate-spin h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    提交中...
                  </span>
                </button>
                <button
                  type="button"
                  @click="resetForm"
                  class="px-8 py-4 rounded-xl border-2 border-gray-300 text-gray-700 font-bold hover:border-[#8BC34A] hover:text-[#8BC34A] transition-all"
                >
                  重置
                </button>
              </div>
            </form>
          </div>
        </div>

        <!-- 社交媒体 -->
        <div class="mt-20 text-center" data-aos="fade-up">
          <h3 class="text-2xl font-bold mb-8 text-gray-800">关注我们</h3>
          <div class="flex justify-center gap-6">
            <a href="#" class="w-16 h-16 rounded-full bg-gradient-to-br from-[#8BC34A] to-[#FF9800] flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg group" title="微信公众号">
              <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.5 3C4.916 3 2 5.693 2 9c0 1.892.858 3.598 2.217 4.734-.157.668-.416 1.49-.832 2.266-.279.519.236 1.084.793.867 1.244-.486 2.637-1.062 3.555-1.398.691.162 1.42.249 2.167.249 3.584 0 6.5-2.693 6.5-6s-2.916-6-6.5-6zm7 9.5c-.19 0-.378-.01-.565-.028C15.644 14.536 17 16.657 17 19c0 .898-.207 1.75-.573 2.51.47.17 1.156.475 1.778.699.278.127.588-.16.48-.417-.208-.493-.393-1.007-.486-1.413C19.143 19.597 20 18.142 20 16.5c0-2.485-2.239-4.5-5-4.5z"/>
              </svg>
            </a>
            <a href="#" class="w-16 h-16 rounded-full bg-gradient-to-br from-[#8BC34A] to-[#FF9800] flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg" title="微博">
              <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 19c-4.418 0-8-2.91-8-6.5S5.582 6 10 6c.345 0 .685.022 1.016.064C11.006 6.021 11 5.99 11 5.96c0-1.657 1.343-3 3-3s3 1.343 3 3c0 .748-.29 1.429-.764 1.94A6.977 6.977 0 0118 12.5C18 16.09 14.418 19 10 19zm0-11c-3.314 0-6 2.014-6 4.5S6.686 17 10 17s6-2.014 6-4.5S13.314 8 10 8z"/>
                <circle cx="9" cy="13" r="1.5"/>
              </svg>
            </a>
            <a href="#" class="w-16 h-16 rounded-full bg-gradient-to-br from-[#8BC34A] to-[#FF9800] flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg" title="抖音">
              <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
              </svg>
            </a>
            <a href="#" class="w-16 h-16 rounded-full bg-gradient-to-br from-[#8BC34A] to-[#FF9800] flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg" title="小红书">
              <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 2.18l8 4V17c0 4.52-3.14 8.72-8 9.92-4.86-1.2-8-5.4-8-9.92V8.18l8-4z"/>
                <path d="M10 14l-2-2-1.41 1.41L10 16.83l6.59-6.59L15.17 9z"/>
              </svg>
            </a>
          </div>
          <p class="text-gray-500 mt-6">扫码关注微信公众号，获取最新优惠信息</p>
        </div>
      </div>
    </section>

    <!-- 成功提示Toast -->
    <Teleport to="body">
      <Transition name="toast">
        <div v-if="showSuccessToast" class="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-white rounded-2xl shadow-2xl p-6 flex items-center gap-4 min-w-[320px]">
          <div class="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <div>
            <h4 class="font-bold text-gray-800 mb-1">提交成功！</h4>
            <p class="text-sm text-gray-600">我们已收到您的留言，将尽快与您联系</p>
          </div>
        </div>
      </Transition>
    </Teleport>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

// 导入导航组件
import Navigation from '@/components/layout/Navigation.vue'
import Footer from '@/components/layout/Footer.vue'
import Breadcrumb from '@/components/shared/Breadcrumb.vue'

// 导入特效组件
import ParticleBackground from '@/components/shared/ParticleBackground.vue'
import MouseFollower from '@/components/shared/MouseFollower.vue'
import ScrollProgress from '@/components/shared/ScrollProgress.vue'
import BackToTop from '@/components/shared/BackToTop.vue'

// 初始化AOS动画
onMounted(() => {
  AOS.init({
    duration: 800,
    once: true,
    offset: 100
  })
})

// 表单数据
const formData = reactive({
  name: '',
  phone: '',
  email: '',
  subject: '',
  message: '',
  agreed: false
})

// 错误信息
const errors = reactive({
  name: '',
  phone: '',
  email: '',
  subject: '',
  message: '',
  agreed: ''
})

// 提交状态
const isSubmitting = ref(false)
const showSuccessToast = ref(false)

// 表单验证
const validateForm = () => {
  let isValid = true

  // 清空之前的错误
  Object.keys(errors).forEach(key => errors[key] = '')

  // 验证姓名
  if (!formData.name.trim()) {
    errors.name = '请输入您的姓名'
    isValid = false
  } else if (formData.name.trim().length < 2) {
    errors.name = '姓名至少需要2个字符'
    isValid = false
  }

  // 验证电话
  const phoneRegex = /^1[3-9]\d{9}$/
  if (!formData.phone.trim()) {
    errors.phone = '请输入您的手机号'
    isValid = false
  } else if (!phoneRegex.test(formData.phone)) {
    errors.phone = '请输入正确的手机号格式'
    isValid = false
  }

  // 验证邮箱（可选）
  if (formData.email.trim()) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      errors.email = '请输入正确的邮箱格式'
      isValid = false
    }
  }

  // 验证主题
  if (!formData.subject) {
    errors.subject = '请选择留言主题'
    isValid = false
  }

  // 验证留言内容
  if (!formData.message.trim()) {
    errors.message = '请输入留言内容'
    isValid = false
  } else if (formData.message.trim().length < 10) {
    errors.message = '留言内容至少需要10个字符'
    isValid = false
  } else if (formData.message.length > 500) {
    errors.message = '留言内容不能超过500个字符'
    isValid = false
  }

  // 验证协议
  if (!formData.agreed) {
    errors.agreed = '请先阅读并同意隐私政策和服务条款'
    isValid = false
  }

  return isValid
}

// 提交表单
const submitForm = async () => {
  if (!validateForm()) {
    return
  }

  isSubmitting.value = true

  // 模拟API请求
  try {
    await new Promise(resolve => setTimeout(resolve, 1500))

    console.log('表单数据：', {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      subject: formData.subject,
      message: formData.message
    })

    // 显示成功提示
    showSuccessToast.value = true
    setTimeout(() => {
      showSuccessToast.value = false
    }, 3000)

    // 重置表单
    resetForm()
  } catch (error) {
    console.error('提交失败：', error)
  } finally {
    isSubmitting.value = false
  }
}

// 重置表单
const resetForm = () => {
  formData.name = ''
  formData.phone = ''
  formData.email = ''
  formData.subject = ''
  formData.message = ''
  formData.agreed = false
  Object.keys(errors).forEach(key => errors[key] = '')
}

// 导航到总部地图
const navigateToHQ = () => {
  // 温州市鹿城区南郊街道划龙桥路655号的大致坐标
  const lat = 27.9969
  const lng = 120.6594
  const name = encodeURIComponent('东池便当总部')
  const url = `https://uri.amap.com/marker?position=${lng},${lat}&name=${name}&src=dongchi&coordinate=gaode&callnative=1`
  window.open(url, '_blank')
}
</script>

<style scoped>
/* Toast动画 */
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}

.toast-enter-from {
  opacity: 0;
  transform: translate(-50%, -20px);
}

.toast-leave-to {
  opacity: 0;
  transform: translate(-50%, -20px);
}

/* 自定义滚动条（textarea） */
textarea::-webkit-scrollbar {
  width: 8px;
}

textarea::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

textarea::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #8BC34A, #FF9800);
  border-radius: 10px;
}

textarea::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #7CB342, #F57C00);
}
</style>
