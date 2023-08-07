import { useEffect, useRef, useState } from "react";
import { useCategories } from "../../../hooks/queries/UseCategories";

const CategoriesFilter = ({
  formId,
  onChangeCategories,
  initialCategories = [],
}) => {
  const { data, isLoading, isError, error } = useCategories();
  const [categoriesIdList, setCategoriesIdList] = useState(initialCategories);
  const isFirstRender = useRef(true);

  const addIdTolist = (categoryId) => {
    const copyLIst = structuredClone(categoriesIdList);
    copyLIst.push(categoryId);

    const copyWithoutRepeats = Array.from(new Set(copyLIst));

    if (copyWithoutRepeats.length === data.length) setCategoriesIdList([]);
    else setCategoriesIdList(copyWithoutRepeats);
  };

  const removeIdFromLIst = (categoryId) => {
    const listWithoutId = categoriesIdList.filter((id) => id !== categoryId);
    setCategoriesIdList(listWithoutId);
  };

  const handleChange = (isChecked, categoryId) => {
    if (isChecked) addIdTolist(categoryId);
    else removeIdFromLIst(categoryId);
  };

  const handleEmpty = (isChecked) => {
    if (isChecked) setCategoriesIdList([]);
  };

  useEffect(() => {
    if (isFirstRender.current) isFirstRender.current = false;
    else onChangeCategories();
  }, [categoriesIdList, onChangeCategories]);

  if (isLoading) return <p>loading categories...</p>;

  if (isError)
    return <p>{error.message ?? "No se puedo obtener las categorias"}</p>;

  return (
    <fieldset form={formId}>
      <legend>Categories</legend>
      <div>
        <input
          type="checkbox"
          name="categories"
          value=""
          id="empty-categories"
          form={formId}
          checked={categoriesIdList.length === 0}
          onChange={(e) => handleEmpty(e.target.checked)}
        />
        <label htmlFor="empty-categories">All</label>
      </div>

      {data.map((category) => (
        <div key={category.id}>
          <input
            type="checkbox"
            name="categories"
            value={category.id}
            id={category.id + "category"}
            form={formId}
            checked={categoriesIdList.includes(category.id)}
            onChange={(e) => handleChange(e.target.checked, category.id)}
          />
          <label htmlFor={category.id + "category"}> {category.name}</label>
        </div>
      ))}
    </fieldset>
  );
};

export default CategoriesFilter;
