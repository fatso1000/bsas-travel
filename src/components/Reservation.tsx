import { Icon } from "@iconify-icon/react";
import EmblaCarousel from "./Carousel";
import Picture1 from "../assets/pexels-micca-ar-308726700-23021526.jpg";
import Picture2 from "../assets/pexels-micca-ar-308726700-23021657.jpg";
import Picture3 from "../assets/pexels-rickson-derik-1225713006-22605358.jpg";
import Picture4 from "../assets/pexels-sofia-linares-corsano-306415279-13447376.jpg";

function Reservation() {
  return (
    <section className="grid grid-cols-1 mx-auto py-7 max-lg:px-2 text-primary bg-secondary rounded-t-3xl w-full">
      <div className="grid grid-cols-1 gap-3 max-w-screen-lg mx-auto">
        <div className="grid xs:grid-cols-1 grid-cols-2 gap-3 px-6">
          <div>
            <h3 className="font-black text-4xl md:text-5xl lg:text-6xl">
              RESERVATION
            </h3>
            <div className="inline-flex w-full gap-3 text-primary">
              <Icon icon="gravity-ui:star-fill" />
              <Icon icon="gravity-ui:star-fill" />
              <Icon icon="gravity-ui:star-fill" />
              <Icon icon="gravity-ui:star-fill" />
              <Icon icon="gravity-ui:star-fill" />
            </div>
            <h6 className="text-accent mb-2 text-sm">
              Excelent hotel near all historic and interesting spots of the
              city!
            </h6>
            <h4 className="text-sm inline-flex w-full items-center gap-2 leading-none">
              <Icon icon="gravity-ui:map-pin" />
              <strong>
                Av. Rivadavia 1900-1854, C1033AAV Cdad. Autónoma de Buenos Aires
              </strong>
            </h4>
            <div className="w-full inline-flex flex-wrap gap-x-2 lg:gap-x-3 gap-y-1 mt-4 text-secondary">
              <div className="bg-accent max-h-12 min-w-16 flex-auto flex items-center justify-center text-center rounded-full px-3 py-2 text-xs">
                Wi-Fi
              </div>
              <div className="bg-accent max-h-12 min-w-16 flex-auto flex items-center justify-center text-center rounded-full px-3 py-2 text-xs">
                AC
              </div>
              <div className="bg-accent max-h-12 min-w-16 flex-auto flex items-center justify-center text-center rounded-full px-3 py-2 text-xs">
                Breakfast
              </div>
              <div className="bg-accent max-h-12 min-w-16 flex-auto flex items-center justify-center text-center rounded-full px-3 py-2 text-xs">
                Security
              </div>
              <div className="bg-accent max-h-12 min-w-16 flex-auto flex items-center justify-center text-center rounded-full px-3 py-2 text-xs">
                LGBTQ+
              </div>
              <div className="bg-accent max-h-12 min-w-16 flex-auto flex items-center justify-center text-center rounded-full px-3 py-2 text-xs">
                Adaptive
              </div>
            </div>
          </div>
          <div className="grid grid-rows-2 grid-cols-1">
            <div className="text-accent flex flex-col">
              <h5 className="text-xl font-bold">Reviews</h5>
              <div className="text-secondary my-auto grid grid-cols-1 grid-rows-1 gap-2">
                <div className="p-2 bg-accent rounded-xl">
                  <div className="w-full items-center inline-flex gap-2">
                    <h3 className="text-sm font-bold">David Bundeldorf</h3>
                    <div className="inline-flex items-center text-xs gap-1 text-primary">
                      <Icon icon="gravity-ui:star-fill" />
                      <Icon icon="gravity-ui:star-fill" />
                      <Icon icon="gravity-ui:star-fill" />
                      <Icon icon="gravity-ui:star-fill" />
                      <Icon icon="gravity-ui:star-fill" />
                    </div>
                  </div>
                  <p className="text-xs">
                    Good breakfast, nice wifi speed connection and nice
                    location.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full">
              <h3 className="text-5xl font-black mt-auto">$599</h3>
              <h6 className="text-accent text-xs">Precio por noche</h6>
            </div>
          </div>
        </div>
        <div className="grid xs:grid-cols-1 grid-cols-2 grid-rows-1 px-6 gap-3">
          <div>
            <EmblaCarousel slides={[Picture1, Picture2, Picture3, Picture4]} />
          </div>
          <div className="relative w-full h-0 pb-[75%] overflow-hidden iframe-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.4941706168725!2d-58.396803424138106!3d-34.59597885708973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccabdfc191295%3A0x8110084c679e64c0!2sEl%20Ateneo%20Grand%20Splendid!5e1!3m2!1sen!2sar!4v1728066037574!5m2!1sen!2sar"
              width="300"
              height="300"
              className="rounded-xl shadow-sm"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="flex w-full items-center justify-center mt-6">
          <a className="text-center md:w-auto w-full rounded-full text-xl bg-primary px-6 py-2 text-secondary">
            BOOK NOW
          </a>
        </div>
      </div>
    </section>
  );
}

export default Reservation;
