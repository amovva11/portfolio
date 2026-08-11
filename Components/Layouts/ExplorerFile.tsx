interface ExplorerFileProps {
  name: string;
  iconClass: string;
}

/** A single filename row in the Explorer tree. */
const ExplorerFile: React.FC<ExplorerFileProps> = ({ name, iconClass }) => (
  <div className="flex justify-start items-center gap-2">
    <div>
      <span className={iconClass} />
    </div>
    <div style={{ position: "relative" }}>{name}</div>
  </div>
);

export default ExplorerFile;
