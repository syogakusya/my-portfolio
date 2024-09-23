const Contact = () => {
  return (
    <div>
      <div className="text-center text-4xl font-bold m-8">Contact</div>
      <div className="text-center">各種SNSのDMなどでご連絡ください</div>
      <div className="mt-4 text-center">
        <p className="m-2">
          Twitter:{" "}
          <a
            href="https://twitter.com/tsuchida_z"
            target="_blank"
            rel="noopener noreferrer"
          >
            @tsuchida_z
          </a>
        </p>
        <p className="m-2">
          Wantedly:{" "}
          <a
            href="https://www.wantedly.com/id/saikyou_tsuchidaz"
            target="_blank"
            rel="noopener noreferrer"
          >
            @saikyou_tsuchidaz
          </a>
        </p>
        <p className="m-2">
          GitHub:{" "}
          <a
            href="https://github.com/syogakusya"
            target="_blank"
            rel="noopener noreferrer"
          >
            @syogakusya
          </a>
        </p>
      </div>
    </div>
  );
};
export default Contact;
