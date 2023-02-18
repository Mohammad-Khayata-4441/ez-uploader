import axios ,{type AxiosRequestConfig} from 'axios'
// ! DONT TOUCH THIS FILE
export type DocumentType  = 'pdf' | 'excel'|'word' |'text'
export type FileType = 'image' | 'video' | DocumentType


export const useFile = () => {

  
  const IMAGE_EXTENTIONS = ['jpg', 'png', 'jpeg', 'webp', 'svg']
  const EXCEL_EXTENTIONS = ['xlsx', 'xlsm', 'xlsb', 'xltx', 'csv']
  const VIDEO_EXTENTIONS = ['mp4', 'mov', 'mkv', 'flv', 'avi', 'webm']
  const WORD_EXTENTIONS = ['docm', 'docx', 'dot', 'dotx']
  const TEXT_EXTENTIONS = ['txt', 'text']
  const PDF_EXTENTIONS = ['pdf', 'ps']



  const fileExtentions = new Map<FileType , string[]>()

  fileExtentions.set('excel',EXCEL_EXTENTIONS)
  fileExtentions.set('image',IMAGE_EXTENTIONS)
  fileExtentions.set('pdf',PDF_EXTENTIONS)
  fileExtentions.set('text',TEXT_EXTENTIONS)
  fileExtentions.set('video',VIDEO_EXTENTIONS)
  fileExtentions.set('word',WORD_EXTENTIONS)

  const toBase64 = (file: File) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()

      reader.readAsDataURL(file)
      reader.onload = () => {
        resolve(reader.result)
      }
      reader.onerror = error => reject(error)
    })
  }


  const getFileExt = (filePath = ''): string => {
    const ext = filePath.split('.').pop()
    if (ext && typeof (ext) == 'string')
      return ext
    else return ''
  }


  const isOfType = (fileExt:string , type:FileType ) =>fileExtentions.get(type)?.includes(fileExt)


  const getFileName = (fileName: string) => {
    const name = fileName.split('_')[1]
    if (name)
      return name

    return fileName
  }

  const getFileSize = (size: string | number) => {
    return `${(+size / 1000000).toFixed(2)}MB`
  }

  function getFileType(fileExt: string):FileType {
    let fileType:FileType ='image' ;

    fileExtentions.forEach((exts , key)=>{
      
      if(isOfType(fileExt , key))

      fileType = key

    })

    
    return  fileType;
    
  }




  function openFileWindow(onUpload: (payload: { file: File; base64: string }) => void) {
    const fileInput = document.createElement('input');

    fileInput.type = 'file';
    fileInput.style.display = 'none';
    document.body.appendChild(fileInput);
    fileInput.addEventListener('change', (event: any) => {
      const file = event.target.files[0];

      toBase64(file).then((base64: any) => {
        onUpload({
          file,
          base64,
        });
      });
    });
    fileInput.click();
  }

  async function downloadFile(fileUrl: string,config:AxiosRequestConfig = {responseType:'blob'}) {
     axios.get(fileUrl,{...config}).then(({ data }) => {
       const downloadUrl = window.URL.createObjectURL(new Blob([data]))
      console.log(downloadUrl)
      const link = document.createElement('a')
      link.href = downloadUrl
      link.setAttribute('download', downloadUrl) // any other extensio
      document.body.appendChild(link)
      link.click()
      link.remove()
    })
  }



  // Todo   ShowInputFile():File
  return {
    toBase64,
    getFileSize,
    getFileName,
    getFileExt,
    getFileType,
    openFileWindow,
    EXCEL_EXTENTIONS,
    IMAGE_EXTENTIONS,
    PDF_EXTENTIONS,
    VIDEO_EXTENTIONS,
    WORD_EXTENTIONS,
    downloadFile,
    // getFileUrl,
  }
}
