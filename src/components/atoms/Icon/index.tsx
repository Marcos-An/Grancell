import FeatherIcon from 'feather-icons-react';

export default function Icon({ iconName, size = "24", color = 'black', onClick = () => { } }) {
  return <FeatherIcon icon={iconName} size={size} style={{ color: color }} onClick={onClick} />
}
