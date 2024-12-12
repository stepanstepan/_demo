export default function extractApi(id) {
  return fetch(`https://api.extruct.ai/v1/workflow_runs/trow-wf_tpl-c52424ff-df30-4589-8c2b-141c260c9fce_dima%40_row_${id}`);
}
