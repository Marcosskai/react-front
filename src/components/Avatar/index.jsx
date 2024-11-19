import "./Avatar.css";

export function Avatar({ hasBorder, src }) {
    return (
        <img
            className={hasBorder ? "avatarWithBorder" : "avatar"}
            src={src}
            alt="Avatar"
        />
    );
}