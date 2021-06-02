import { Request, Response, Router } from "express";


const router= Router();

router.get('/mensajes',(req: Request, res: Response)=>{

    res.json({
        ok:true,
        msg: 'Todo bien'
    })
})


router.post('/mensajes',(req: Request, res: Response)=>{

    const { mensaje, de } = req.body;

    res.json({
        ok:true,
        msg: 'Envio Mensaje',
        body: {
            de,
            mensaje
        }

    })
})


export default router;