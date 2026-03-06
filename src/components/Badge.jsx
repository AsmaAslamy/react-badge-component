export default function Badg({ label, value }) {
  return (
    <div className="badges">
      <strong>
        {label}: {value}
      </strong>
    </div>
  );
}
