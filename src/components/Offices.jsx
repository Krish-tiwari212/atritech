import clsx from "clsx";

function Office({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        "text-sm not-italic",
        invert ? "text-neutral-300" : "text-neutral-600"
      )}
    >
      <strong className={invert ? "text-white" : "text-neutral-950"}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  );
}

const Offices = ({ invert = false, ...props }) => {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="Krish" invert={invert}>
          +91 7678642369
          <br />
           <a href="https://krishtiwari.vercel.app/">Visit My Website</a>
        </Office>
      </li>
      <li>
        <Office name="Dushant" invert={invert}>
          +91 7289020478
          <br />
          <a href="https://www.instagram.com/sharmadushant_?igsh=MXVjaWpoZ3F4enJncg==">Follow me on Insta</a>
        </Office>
      </li>
    </ul>
  );
};

export default Offices;
