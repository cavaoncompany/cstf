import axios from '~/plugins/axios'
export const state = () => ({
  emailProvider: {
    service: 'smtp',
    username: 'username',
    password: 'pw'
  }
})

export const mutations = {
  setNewEmailProvider(state, payload) {
    state.emailProvider = payload
  }
}

export const getters = {
  emailProvider(state) {
    return state.emailProvider
  }
}

async function sendEmail({ state, commit }, payload, path) {
  path = path || 'contact'

  const emailInfo = payload
  // const emailProvider = state.emailProvider

  // if (emailProvider.username !== '' && emailProvider.password !== '') {
  try {
    // eslint-disable-next-line
    const { res } = await axios.post(path, {
      emailInfo
    })
    // alert('Message sent successfully')
  } catch (e) {
    alert(e)
  }
  // }
}

export const actions = {
  async contactUs({ state, commit }, payload) {
    const path = '/.netlify/functions/contact'
    await sendEmail({ state, commit }, payload, path)
  },
  async getQuote({ state, commit }, payload) {
    const path = '/.netlify/functions/quote'
    await sendEmail({ state, commit }, payload, path)
  }
}
