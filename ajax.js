const common_params = {}

// 请求方法
const api_request = async (api_url, inputs = {}) => {
    // 请求API
    params = {
        ...common_params,
        ...inputs
    }

    // 将参数转为FormData进行发送
    const form_data = new FormData()
    Object.keys(params).forEach(
        key => {
            form_data.append(key, params[key])
            // console.log(form_data.get(key)) // FormData对象无法直接console.log，可通过get方法查看特定键值
        }
    )

    let api_result = ''

    await new Promise((resolve, reject) => {
        const request = new XMLHttpRequest()

        request.open('post', api_url, true)

        request.onload = () => {

            if (request.status === 200) {
                api_result = JSON.parse(request.response)
                console.log(api_result)

                resolve(api_result)
            } else {
                reject(Error(request.statusText))
            }
        }

        request.onerror = () => {
            reject(Error('Network Error'))
        }

        request.send(form_data)
    })

    return api_result // end Promise

} // end function api_request