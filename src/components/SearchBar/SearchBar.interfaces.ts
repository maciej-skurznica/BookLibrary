export interface SearchBarProps {
  placeholder: string;
  notFound?: boolean;
  handleSearch?: (value: string) => void;
  handleReset?: () => void;
}
