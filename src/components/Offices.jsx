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
        <Office name="Atri" invert={invert}>
          +91 7289020478
          <br />
           <a href="https://t.me/atritechnologies">DM us on Telegram</a>
        </Office>
      </li>
    </ul>
  );
};

export default Offices;
