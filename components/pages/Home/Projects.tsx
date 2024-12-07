import { Montserrat } from "@next/font/google";
import CardProject from "components/common/CardProject";
import RankProgress from "components/common/RankProgress";
import Link from "next/link";
import React from "react";

const mont = Montserrat({ subsets: ["latin"] });

const Projects = () => {
  return (
    <div
      data-aos="fade-down-right"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      className="content-area"
      id="my-projects"
    >
      <div className={mont.className}>
        <h2>MY PROJECTS</h2>

        <div style={{ rowGap: 25 }} className="row justify-content-stretch">
          <div className="col-12 col-lg-6 col-xl-4">
            <CardProject
              counter={1}
              title={
                <>
                  Todo <br /> Application{" "}
                </>
              }
              content={
                <p>
                  Management task list with category. Task list pending. Task
                  list completed. Task list follow. Report. Hidden category (if
                  you don&apos;t want to working task with this category).
                  Warning overdue task. Build real steps to make this task. Mail
                  notification. Task counting time.
                </p>
              }
            />
          </div>
          <div className="col-12 col-lg-6 col-xl-4">
            <CardProject
              counter={2}
              title={
                <>
                  Company <br /> Management System{" "}
                </>
              }
              content={
                <p>
                  HR Management. Payroll System. Document Iso, document in /
                  out. Attendance sheet. Overtime management. Annual leave. Task
                  management. IT Asset management. IT Helpdesk. Travel request
                  process. Employee management. Project Management.
                </p>
              }
            />
          </div>
          <div className="col-12 col-lg-6 col-xl-4">
            <CardProject
              counter={3}
              title={
                <>
                  Booking <br /> Resource{" "}
                </>
              }
              content={
                <p>
                  Booking for nails system / restaurant. Business trip / Vehicle
                  / Flight / Meeting Room.
                </p>
              }
            />
          </div>
          <div className="col-12 col-lg-6 col-xl-4">
            <CardProject
              counter={4}
              title={
                <>
                  Truck <br /> Retailers System{" "}
                </>
              }
              content={
                <p>
                  Daily freight management system include: order, payment,
                  tracking inventory.
                </p>
              }
            />
          </div>
          <div className="col-12 col-lg-6 col-xl-4">
            <CardProject
              counter={5}
              title={
                <>
                  Shop <br /> Management System{" "}
                </>
              }
              content={
                <p>
                  To manage stock, invoices, orders, and bookings efficiently,
                  it is important to set up an organized system that can track
                  these elements in real-time, integrate smoothly, and offer
                  useful reporting.
                </p>
              }
            />
          </div>
          <div className="col-12 col-lg-6 col-xl-4">
            <CardProject
              counter={6}
              title={
                <>
                  Mini <br /> Projects
                </>
              }
              content={
                <p>
                  <Link
                    href="https://codesandbox.io/s/book-1hpce6"
                    target="_blank"
                  >
                    https://codesandbox.io/s/book-1hpce6 : Design book 3D
                  </Link>
                </p>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Projects);
