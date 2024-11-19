import React, { useEffect } from "react";
const ChinhSachDV = () => {

    useEffect(() => {
        // Cuộn lên đầu trang
        window.scrollTo(0, 0);
      }, []);
    return (
        <>

            <div className=" w-screen">
                <div className=" mx-14 my-8">
                    <div className=" grid grid-cols-10 gap-2">
                        <div className=" col-span-10 bg-white rounded shadow-lg">
                            <div className=" flex items-center justify-between">
                                <div className=" flex items-center py-3 justify-start mx-12">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2.5}
                                        stroke="currentColor"
                                        className="size-6 text-red-600"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                                        />
                                    </svg>
                                    <h2 className=" text-xl uppercase font-bold text-red-600 ml-4">
                                        {" "}
                                        Điều khoản Dịch Vụ
                                    </h2>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className=" col-span-10  bg-white rounded shadow-lg">
                        <p className=" mt-4 pt-6 text-sm mx-12  text-justify italic">
                            Chào mừng quý khách đến mua sắm tại BOOKHUH.
                            Sau khi truy cập vào website BOOKHUH để tham khảo hoặc mua sắm, quý khách đã đồng ý tuân thủ và ràng buộc với những quy định của BOOKHUH. Vui lòng xem kỹ các quy định và hợp tác với chúng tôi để xây dựng 1 website BOOKHUH ngày càng thân thiện và phục vụ tốt những yêu cầu của chính quý khách. Ngoài ra, nếu có bất cứ câu hỏi nào về những thỏa thuận dưới đây, vui lòng liên hệ với BOOKHUH theo số điện thoại hotline 1900636467 hoặc email cho chúng tôi qua địa chỉ cskh@BOOKHUH.com.vn
                        </p>
                        <p className=" font-semibold mx-12 text-xl mt-4">Tài khoản của khách hàng</p>
                        <p className=" text-sm mx-12  text-justify mt-4">
                            Một số dịch vụ, tính năng tại đây yêu cầu quý khách cần phải đăng ký Tài khoản BOOKHUH thì mới có thể sử dụng. Do đó, để tận hưởng đầy đủ các dịch vụ và tính năng này, quý khách vui lòng cho phép BOOKHUH tiến hành xử lý các dữ liệu cá nhân cơ bản sau:
                        </p>
                        <p className=" text-sm mx-12 pb-10  text-justify ">

                            Dữ liệu cá nhân cơ bản bắt buộc phải cung cấp, là các thông tin giúp xác định danh tính đối với từng tài khoản BOOKHUH, bao gồm họ tên, địa chỉ email, số điện thoại,... của quý khách.

                            <br/>Trường hợp quý khách đăng ký tài khoản BOOKHUH thông qua tài khoản Facebook hoặc Google, các dữ liệu cá nhân cơ bản của quý khách cung cấp cho các nền tảng này như họ tên, địa chỉ email, số điện thoại, ảnh đại diện,... sẽ được gửi đến BOOKHUH ngay khi quý khách cho phép BOOKHUH truy cập vào thông tin của quý khách trên các nền tảng này theo từng chính sách của nền tảng.

                            <br/>• Dữ liệu cá nhân cơ bản được cung cấp để phục vụ giao dịch, là các thông tin cần thiết để thực hiện một giao dịch tại website BOOKHUH.com, bao gồm địa chỉ giao hàng, địa chỉ thanh toán, phương thức thanh toán,... của quý khách.

                            <br/>• Dữ liệu cá nhân cơ bản tự nguyện cung cấp, là các thông tin mà quý khách có thể chia sẻ (hoặc không) để cá nhân hóa trải nghiệm sử dụng dịch vụ tại BOOKHUH, bao gồm ngày tháng năm sinh, giới tính, sở thích, nghề nghiệp,... của quý khách.

                            <br/>Việc sử dụng và bảo mật thông tin Tài khoản BOOKHUH là trách nhiệm và quyền lợi của quý khách khi sử dụng dịch vụ tại BOOKHUH. Quý khách phải giữ kín mật khẩu và tài khoản, hoàn toàn chịu trách nhiệm đối với tất cả các hoạt động diễn ra thông qua việc sử dụng mật khẩu hoặc tài khoản của mình. Quý khách nên đảm bảo thoát khỏi Tài khoản BOOKHUH sau mỗi lần sử dụng để bảo mật dữ liệu cá nhân của mình.

                            <br/>Trong trường hợp thông tin do quý khách cung cấp không đầy đủ hoặc có sai sót dẫn đến việc không thể giao hàng cho quý khách, chúng tôi có quyền đình chỉ hoặc từ chối phục vụ, giao hàng mà không phải chịu bất cứ trách nhiệm nào đối với quý khách. Khi có những thay đổi thông tin của quý khách, vui lòng cập nhật lại thông tin trong Tài khoản BOOKHUH.

                            Quyền lợi bảo mật dữ liệu cá nhân của khách hàng

                            <br/>Khi sử dụng dịch vụ tại website BOOKHUH, quý khách được đảm bảo rằng những thông tin cung cấp cho chúng tôi sẽ chỉ được dùng để nâng cao chất lượng dịch vụ dành cho khách hàng của BOOKHUH và sẽ không được chuyển giao cho một bên thứ ba nào khác vì mục đích thương mại. Trường hợp quý khách có yêu cầu: rút lại sự đồng ý, xóa, chỉnh sửa, phản đối, yêu cầu cung cấp, yêu cầu hạn chế xử lý đối với các dữ liệu cá nhân của mình, quý khách vui lòng thao tác trên hệ thống website hoặc liên hệ với BOOKHUH theo số điện thoại hotline 1900636467 hoặc email cho chúng tôi qua địa chỉ cskh@BOOKHUH.com.vn.

                            <br/>Dữ liệu cá nhân của quý khách tại BOOKHUH sẽ được chúng tôi bảo mật và chỉ trong trường hợp pháp luật yêu cầu, chúng tôi sẽ buộc phải cung cấp những thông tin này cho các cơ quan có thẩm quyền.


                            <br/>Trách nhiệm của khách hàng khi sử dụng dịch vụ của BOOKHUH

                            <br/>Quý khách tuyệt đối không được sử dụng bất kỳ công cụ, phương pháp nào để can thiệp, xâm nhập bất hợp pháp vào hệ thống hay làm thay đổi cấu trúc dữ liệu tại website BOOKHUH. Quý khách không được có những hành động (như thực hiện, cổ vũ,...) việc can thiệp, xâm nhập dữ liệu của BOOKHUH cũng như hệ thống máy chủ của chúng tôi.

                            <br/> Quý khách không được đưa ra những nhận xét, đánh giá có ý xúc phạm, quấy rối, làm phiền hoặc có bất cứ hành vi nào thiếu văn hóa đối với người khác. Không nêu ra những nhận xét có tính chính trị (tuyên truyền, chống phá, xuyên tạc chính quyền), kỳ thị tôn giáo, giới tính, sắc tộc.... Tuyệt đối cấm mọi hành vi mạo nhận, cố ý tạo sự nhầm lẫn mình là một khách hàng khác hoặc là thành viên Ban Quản Trị BOOKHUH.

                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ChinhSachDV;