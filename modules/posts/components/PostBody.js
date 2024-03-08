export function PostBody({ content }) {
  return (
    <div className="max-w-2xl text-left prose mx-auto">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
