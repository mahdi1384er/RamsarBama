import Image from "next/image";
import profilePic from "../src/img/profile.png";
import ItemsGrouping1 from "../src/img/trees 1.svg";
import ItemsGrouping2 from "../src/img/trees 2.svg";
import ItemsGrouping3 from "../src/img/trees 3.png";
import ItemsGrouping4 from "../src/img/beach 4.png";

export default function Home() {
  return (
    <main className="h-[900px]">
      <section>
        {/* Heaader */}
        <header className="Headerbg">
          <section className="w-[89%] m-auto pt-[25px]">
            <div className="flex items-center flex-col justify-between w-[100%] h-[200px] ">
              {/* Navbars */}
              <div className="w-full h-[20%] ">
                <nav className="w-full">
                  <ul className="w-full flex items-center justify-between">
                    <div className="flec flex-col items-center">
                      <li>
                        <p className="font-bold">رامسر باما</p>
                      </li>
                      <li>
                        <p className="text-[12px] text-[##FFF] opacity-[0.8]">
                          اجاره آنلاین ویلا
                        </p>
                      </li>
                    </div>
                    <div className="flex items-center justify-between w-[25%]">
                      <li>
                        <Image src={profilePic} className="w-[37px]" />
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="34"
                          height="22"
                          viewBox="0 0 34 22"
                          fill="none"
                          className="w-[24px]"
                        >
                          <path
                            d="M3.58447 3.70093H30.9192"
                            stroke="white"
                            stroke-width="6.05446"
                            stroke-linecap="round"
                          />
                          <path
                            d="M3.06836 18.8372H19.5724"
                            stroke="white"
                            stroke-width="6.05446"
                            stroke-linecap="round"
                          />
                        </svg>
                      </li>
                    </div>
                  </ul>
                </nav>
              </div>
             <div className="BorderHeader"></div>
              {/* Titel */}
              <div className="h-[40%] flex justify-center items-center">
                <h1 className="text-[22px]">
                  اجاره آنلاین ویلا و <br />
                  سوئیت در <span className="RamsarHeader">رامسر</span>
                </h1>
              </div>
              {/* Serchbox */}
              <div className="h-[30%] flex items-center">
                <form className="flex items-center">
                  <div className="flex items-center">
                    <div className="relative right-[45px] z-[1]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 30 30"
                        fill="none"
                      >
                        <g opacity="0.7">
                          <path
                            d="M23.6742 18.0186V12.063V11.8069L18.2717 6.36601C16.6572 4.74001 15.8499 3.927 14.8468 3.927C13.8436 3.927 13.0364 4.74001 11.4218 6.36601L6.01935 11.8069V12.063V18.0186C6.01935 21.5238 8.41499 24.5679 11.8035 25.3684C13.8052 25.8413 15.8883 25.8413 17.89 25.3684C21.2785 24.5679 23.6742 21.5238 23.6742 18.0186Z"
                            fill="#0A0047"
                            fill-opacity="0.15"
                          />
                          <path
                            d="M17.89 25.3684L18.0988 26.2522L17.89 25.3684ZM11.8035 25.3684L11.5947 26.2522H11.5947L11.8035 25.3684ZM18.2717 6.36601L17.6272 7.00591L18.2717 6.36601ZM11.4218 6.36601L12.0663 7.00591L11.4218 6.36601ZM12.084 22.4782L11.1914 22.3107L12.084 22.4782ZM12.1074 22.3535L11.2149 22.1859V22.1859L12.1074 22.3535ZM17.5861 22.3535L18.4787 22.1859V22.1859L17.5861 22.3535ZM17.6095 22.4782L16.7169 22.6458V22.6458L17.6095 22.4782ZM17.2586 25.1805L18.0786 25.5707H18.0786L17.2586 25.1805ZM16.2971 25.0873C16.0816 25.5402 16.274 26.0821 16.7269 26.2976C17.1798 26.5132 17.7217 26.3207 17.9372 25.8678L16.2971 25.0873ZM12.4349 25.1805L11.6149 25.5707L11.6149 25.5707L12.4349 25.1805ZM11.7563 25.8678C11.9718 26.3207 12.5137 26.5132 12.9666 26.2976C13.4195 26.0821 13.6119 25.5402 13.3964 25.0873L11.7563 25.8678ZM14.0731 20.2045L13.8303 19.3294L14.0731 20.2045ZM15.6204 20.2045L15.8633 19.3294L15.6204 20.2045ZM3.30429 13.2524C2.95088 13.6083 2.95292 14.1833 3.30884 14.5367C3.66475 14.8901 4.23977 14.8881 4.59317 14.5322L3.30429 13.2524ZM23.6742 11.8069L24.3186 11.167L24.3186 11.167L23.6742 11.8069ZM25.1003 14.5322C25.4537 14.8881 26.0288 14.8901 26.3847 14.5367C26.7406 14.1833 26.7426 13.6083 26.3892 13.2524L25.1003 14.5322ZM22.766 12.063V18.0186H24.5823V12.063H22.766ZM6.92752 18.0186V12.063H5.11118V18.0186H6.92752ZM17.6812 24.4846C15.8169 24.925 13.8766 24.925 12.0123 24.4846L11.5947 26.2522C13.7337 26.7576 15.9598 26.7576 18.0988 26.2522L17.6812 24.4846ZM12.0123 24.4846C9.03763 23.7818 6.92752 21.1068 6.92752 18.0186H5.11118C5.11118 21.9408 7.79236 25.354 11.5947 26.2522L12.0123 24.4846ZM18.0988 26.2522C21.9011 25.354 24.5823 21.9408 24.5823 18.0186H22.766C22.766 21.1068 20.6559 23.7818 17.6812 24.4846L18.0988 26.2522ZM18.9161 5.72612C18.127 4.93138 17.472 4.26903 16.8833 3.81663C16.2739 3.34833 15.6287 3.01883 14.8468 3.01883V4.83517C15.0679 4.83517 15.328 4.91217 15.7766 5.25688C16.2459 5.61748 16.8018 6.17464 17.6272 7.00591L18.9161 5.72612ZM12.0663 7.00591C12.8917 6.17464 13.4476 5.61748 13.9169 5.25688C14.3655 4.91217 14.6256 4.83517 14.8468 4.83517V3.01883C14.0648 3.01883 13.4197 3.34833 12.8102 3.81663C12.2215 4.26903 11.5665 4.93138 10.7774 5.72612L12.0663 7.00591ZM12.9766 22.6458L13 22.521L11.2149 22.1859L11.1914 22.3107L12.9766 22.6458ZM16.6935 22.521L16.7169 22.6458L18.5021 22.3107L18.4787 22.1859L16.6935 22.521ZM16.4385 24.7902L16.2971 25.0873L17.9372 25.8678L18.0786 25.5707L16.4385 24.7902ZM11.6149 25.5707L11.7563 25.8678L13.3964 25.0873L13.255 24.7902L11.6149 25.5707ZM16.7169 22.6458C16.8533 23.3725 16.7556 24.1239 16.4385 24.7902L18.0786 25.5707C18.5611 24.5568 18.7093 23.4148 18.5021 22.3107L16.7169 22.6458ZM11.1914 22.3107C10.9842 23.4148 11.1324 24.5568 11.6149 25.5707L13.255 24.7902C12.9379 24.1239 12.8402 23.3725 12.9766 22.6458L11.1914 22.3107ZM14.3159 21.0796C14.6634 20.9832 15.0302 20.9832 15.3776 21.0796L15.8633 19.3294C15.198 19.1448 14.4955 19.1448 13.8303 19.3294L14.3159 21.0796ZM18.4787 22.1859C18.2209 20.8128 17.2085 19.7026 15.8633 19.3294L15.3776 21.0796C16.0498 21.2661 16.5625 21.8233 16.6935 22.521L18.4787 22.1859ZM13 22.521C13.131 21.8233 13.6437 21.2661 14.3159 21.0796L13.8303 19.3294C12.485 19.7026 11.4726 20.8128 11.2149 22.1859L13 22.521ZM10.7774 5.72612L5.3749 11.167L6.66379 12.4468L12.0663 7.00591L10.7774 5.72612ZM5.3749 11.167L3.30429 13.2524L4.59317 14.5322L6.66379 12.4468L5.3749 11.167ZM6.92752 12.063V11.8069H5.11118V12.063H6.92752ZM17.6272 7.00591L23.0297 12.4468L24.3186 11.167L18.9161 5.72612L17.6272 7.00591ZM23.0297 12.4468L25.1003 14.5322L26.3892 13.2524L24.3186 11.167L23.0297 12.4468ZM24.5823 12.063V11.8069H22.766V12.063H24.5823Z"
                            fill="#0A0047"
                          />
                        </g>
                      </svg>
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="جستجوی اقامتگاه"
                        className="inputHeader"
                      />
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="35"
                        height="35"
                        viewBox="0 0 52 53"
                        fill="none"
                        className="relative left-[35px] top-[10px]"
                      >
                        <ellipse
                          cx="25.7154"
                          cy="26.4304"
                          rx="25.4287"
                          ry="26.0342"
                          fill="#6475FF"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="17"
                        viewBox="0 0 20 20"
                        fill="none"
                        className="relative left-[25px] bottom-[16px]"
                      >
                        <path
                          d="M9.47939 17.5264C13.8631 17.5264 17.4168 13.9727 17.4168 9.58901C17.4168 5.20531 13.8631 1.65161 9.47939 1.65161C5.09569 1.65161 1.54199 5.20531 1.54199 9.58901C1.54199 13.9727 5.09569 17.5264 9.47939 17.5264Z"
                          fill="white"
                          fill-opacity="0.25"
                          stroke="white"
                          stroke-width="2.42178"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                        />
                        <path
                          d="M15.1914 15.3013L17.8887 17.9985"
                          stroke="white"
                          stroke-width="2.42178"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </header>

        {/* Grouping */}
        <section className="w-[89%] m-auto text-black relative bottom-[123px]">
          <div className="flex items-center justify-around">
            <div className="flex flex-col items-center h-[81px]">
              <div className="w-[60px] h-[71px] ">
                <div className="ItemGrouping">
                  <div className="ItemGroupimgs">
                    <Image src={ItemsGrouping1} className="w-[30px]" />
                  </div>
                </div>
              </div>
              <div>
                <p className="TitelGrouping">جنگلی</p>
              </div>
            </div>
            <div className="flex flex-col items-center h-[81px]">
              <div className="w-[60px] h-[71px] ">
                <div className="ItemGrouping">
                  <div className="ItemGroupimgs">
                    <Image src={ItemsGrouping2} className="w-[30px]" />
                  </div>
                </div>
              </div>
              <div>
                <p className="TitelGrouping">کلبه</p>
              </div>
            </div>
            <div className="flex flex-col items-center h-[81px]">
              <div className="w-[60px] h-[71px] ">
                <div className="ItemGrouping">
                  <div className="ItemGroupimgs">
                    <Image src={ItemsGrouping3} className="w-[30px]" />
                  </div>
                </div>
              </div>
              <div>
                <p className="TitelGrouping">ساحلی</p>
              </div>
            </div>
            <div className="flex flex-col items-center h-[81px]">
              <div className="w-[60px] h-[71px] ">
                <div className="ItemGrouping">
                  <div className="ItemGroupimgs">
                    <Image src={ItemsGrouping4} className="w-[30px]" />
                  </div>
                  <div className="NewGrouping">
                    <p className="TitelNewGrouping">جدید</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="TitelGrouping">جنگلی</p>
              </div>
            </div>
          </div>
        </section>


      </section>
    </main>
  );
}
