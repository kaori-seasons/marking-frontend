import {Item, ItemPanel} from 'gg-editor';

import {Card} from 'antd';
import React from 'react';
import styles from './index.less';

const KoniItemPanel = () => (
    <ItemPanel className={styles.itemPanel}>
        <Card bordered={false}>
            <Item
                type="node"
                size="40"
                shape="koni-custom-node"
                model={{
                    color: '#69C0FF',
                    label: 'Bank',
                    labelOffsetY: 28,
                    icon:
                        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyLjM1IDExLjUxNGwuMDEtLjAxNEE2Ljk2NiA2Ljk2NiAwIDAgMCAxNCA3YTYuOTczIDYuOTczIDAgMCAwLTEuNjM3LTQuNWwtLjAxMS0uMDEzLS4wNS0uMDU3LS4wMi0uMDIyLS4wNjMtLjA3NC0uMDAyLS4wMDEtLjA3Mi0uMDgtLjAwMS0uMDAxYy0uMDUtLjA1NC0uMS0uMTA3LS4xNTItLjE1OGwtLjAwMS0uMDAyLS4wNzUtLjA3NS0uMDA1LS4wMDQtLjA3LS4wNjgtLjAyNS0uMDIzLS4wNDctLjA0NC0uMDE2LS4wMTZBNi45NjYgNi45NjYgMCAwIDAgNyAwYTYuOTczIDYuOTczIDAgMCAwLTQuNzU1IDEuODYybC0uMDE1LjAxNi0uMDQ3LjA0NS0uMDI1LjAyNC0uMDcuMDY3LS4wMDUuMDA1LS4wNzUuMDc1LS4wMDIuMDAxLS4xNTEuMTU4LS4wMDIuMDAyYTMuMzA5IDMuMzA5IDAgMCAwLS4wNzIuMDhIMS43OGExLjQzNiAxLjQzNiAwIDAgMC0uMDY0LjA3NGwtLjAyLjAyMmMtLjAxNi4wMTktLjAzMi4wNC0uMDUuMDU4LS4wMDIuMDA1LS4wMDcuMDA4LS4wMS4wMTNBNi45NzMgNi45NzMgMCAwIDAgMCA3YzAgMS43MTQuNjE2IDMuMjgzIDEuNjM4IDQuNWwuMDEuMDE0LjA0OS4wNTguMDE5LjAyMi4wNjQuMDczLjAwMS4wMDNjLjAyNC4wMjcuMDQ3LjA1My4wNzIuMDc4bC4wMDIuMDAyLjE1LjE1OC4wMDEuMDAxLjA3NC4wNzQuMDA0LjAwNUE2Ljk4NyA2Ljk4NyAwIDAgMCA3IDE0YTYuOTczIDYuOTczIDAgMCAwIDQuOTEtMi4wMTJsLjAwNi0uMDA1Yy4wMjUtLjAyNS4wNS0uMDQ5LjA3My0uMDc0bC4wMDItLjAwMWE0LjczIDQuNzMgMCAwIDAgLjE1LS4xNThsLjAwMS0uMDAyYy4wMjQtLjAyNi4wNDktLjA1MS4wNzItLjA3OCAwLS4wMDEuMDAyLS4wMDEuMDAyLS4wMDMuMDIyLS4wMjMuMDQzLS4wNDguMDY0LS4wNzNsLjAxOC0uMDIyYy4wMi0uMDIuMDM2LS4wNC4wNTItLjA1OHptLjA2NC0yLjIyOGMtLjIxNi41MS0uNS45ODEtLjg0NyAxLjQxYTYuOTM5IDYuOTM5IDAgMCAwLTEuMjczLS44NzRjLjE4MS0uNzMzLjI5My0xLjUzOC4zMjMtMi4zODRoMi4yNDJhNS44NDIgNS44NDIgMCAwIDEtLjQ0NSAxLjg0OHptLjQ0NS0yLjcyM2gtMi4yNDJhMTEuNjgxIDExLjY4MSAwIDAgMC0uMzIzLTIuMzg1IDYuOTM5IDYuOTM5IDAgMCAwIDEuMjczLS44NzMgNS44NDIgNS44NDIgMCAwIDEgMS4yOTIgMy4yNTh6TTkuMjg2IDEuNTg1YTUuODQgNS44NCAwIDAgMSAxLjY4MSAxLjA4MWMtLjI4OS4yNDctLjYuNDY0LS45MjguNjUzLS4yNDUtLjcwMy0uNTYtMS4zMTQtLjkyNS0xLjgwMy4wNTguMDIyLjExNi4wNDYuMTcyLjA2OXpNNy44NyAxMi41MzNhMS43NjggMS43NjggMCAwIDEtLjQzMy4yNTZWOS44OTFhNi4wOCA2LjA4IDAgMCAxIDEuODA4LjQwOWMtLjEzLjM4NC0uMjguNzQtLjQ1MyAxLjA2LS4yNzIuNTA2LS41OS45MS0uOTIyIDEuMTczem0uOTIyLTkuODkyYy4xNzIuMzIxLjMyNC42NzYuNDUzIDEuMDU5YTYuMDggNi4wOCAwIDAgMS0xLjgwNy40MVYxLjIxMWMuMTQzLjA1OC4yODkuMTQzLjQzMi4yNTcuMzMyLjI2LjY1LjY2NS45MjIgMS4xNzJ6TTcuNDM4IDkuMDE0VjcuNDM4aDIuMzA0Yy0uMDI1LjY5LS4xMSAxLjM2LS4yNTUgMS45OTZsLS4wMDQuMDJhNi45NTMgNi45NTMgMCAwIDAtMi4wNDYtLjQ0em0wLTIuNDUxVjQuOTg2YTYuOTUzIDYuOTUzIDAgMCAwIDIuMDQ1LS40NGwuMDA1LjAyYy4xNDMuNjM2LjIzIDEuMzA0LjI1NCAxLjk5N0g3LjQzN3ptLS44NzUuODc1djEuNTc2YTYuOTUzIDYuOTUzIDAgMCAwLTIuMDQ2LjQ0bC0uMDA1LS4wMmExMC44MzUgMTAuODM1IDAgMCAxLS4yNTQtMS45OTZoMi4zMDR6bS0yLjMwNS0uODc1Yy4wMjUtLjY5MS4xMS0xLjM2MS4yNTUtMS45OTdsLjAwNC0uMDJhNi45NDMgNi45NDMgMCAwIDAgMi4wNDUuNDR2MS41NzdINC4yNTh6TTYuNTYyIDkuODl2Mi44OTZhMS43NDggMS43NDggMCAwIDEtLjQzMi0uMjU2Yy0uMzMyLS4yNi0uNjUyLS42NjctLjkyNC0xLjE3M2E3LjA2IDcuMDYgMCAwIDEtLjQ1My0xLjA2IDYuMDk4IDYuMDk4IDAgMCAxIDEuODEtLjQwN3ptMC01Ljc4MkE2LjA4IDYuMDggMCAwIDEgNC43NTUgMy43Yy4xMy0uMzg0LjI4LS43NC40NTMtMS4wNi4yNzItLjUwNi41OS0uOTEyLjkyMy0xLjE3M2ExLjggMS44IDAgMCAxIC40MzMtLjI1NnYyLjg5OGgtLjAwMnpNNC43MTUgMS41ODZjLjA1OC0uMDI0LjExNC0uMDQ3LjE3Mi0uMDY5LS4zNjYuNDktLjY4IDEuMS0uOTI1IDEuODAzYTYuMDU3IDYuMDU3IDAgMCAxLS45MjgtLjY1MyA1Ljg0IDUuODQgMCAwIDEgMS42ODEtMS4wODF6TTEuNTg2IDQuNzE0Yy4yMTYtLjUxLjUtLjk4MS44NDctMS40MS4zODkuMzM3LjgxNS42MyAxLjI3My44NzRhMTEuNjgxIDExLjY4MSAwIDAgMC0uMzIzIDIuMzg1SDEuMTRhNS44IDUuOCAwIDAgMSAuNDQ1LTEuODQ5ek0xLjE0IDcuNDM3aDIuMjQyYy4wMy44NDcuMTQyIDEuNjUyLjMyMyAyLjM4NWE2LjkzOSA2LjkzOSAwIDAgMC0xLjI3My44NzNBNS44NDIgNS44NDIgMCAwIDEgMS4xNCA3LjQzN3ptMy41NzMgNC45NzdhNS44NCA1Ljg0IDAgMCAxLTEuNjgxLTEuMDgxYy4yODktLjI0Ny42LS40NjQuOTI4LS42NTMuMjQ1LjcwMy41NiAxLjMxNC45MjUgMS44MDNhNS42MjQgNS42MjQgMCAwIDEtLjE3Mi0uMDY5em00LjU3MiAwYTYuMTY4IDYuMTY4IDAgMCAxLS4xNzIuMDY5Yy4zNjYtLjQ5LjY4LTEuMS45MjUtMS44MDMuMzI4LjE4Ny42NC40MDYuOTI4LjY1M2E1Ljg0IDUuODQgMCAwIDEtMS42ODEgMS4wODF6IiBmaWxsPSIjRkZGIi8+PC9zdmc+',
                }}
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxjaXJjbGUgaWQ9ImIiIGN4PSIyMCIgY3k9IjIwIiByPSIyMCIvPjxmaWx0ZXIgeD0iLTE3LjUlIiB5PSItMTIuNSUiIHdpZHRoPSIxMzUlIiBoZWlnaHQ9IjEzNSUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgaWQ9ImEiPjxmZU9mZnNldCBkeT0iMiIgaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9InNoYWRvd09mZnNldE91dGVyMSIvPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIiIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSIvPjxmZUNvbXBvc2l0ZSBpbj0ic2hhZG93Qmx1ck91dGVyMSIgaW4yPSJTb3VyY2VBbHBoYSIgb3BlcmF0b3I9Im91dCIgcmVzdWx0PSJzaGFkb3dCbHVyT3V0ZXIxIi8+PGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjA0IDAiIGluPSJzaGFkb3dCbHVyT3V0ZXIxIi8+PC9maWx0ZXI+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNCAyKSI+PHVzZSBmaWxsPSIjMDAwIiBmaWx0ZXI9InVybCgjYSkiIHhsaW5rOmhyZWY9IiNiIi8+PGNpcmNsZSBzdHJva2U9IiM2OUMwRkYiIHN0cm9rZS1saW5lam9pbj0ic3F1YXJlIiBmaWxsLW9wYWNpdHk9Ii45MiIgZmlsbD0iIzY5QzBGRiIgY3g9IjIwIiBjeT0iMjAiIHI9IjE5LjUiLz48L2c+PHBhdGggZD0iTTI5LjM1IDI2LjUxNGwuMDEtLjAxNEE2Ljk2NiA2Ljk2NiAwIDAgMCAzMSAyMmE2Ljk3MyA2Ljk3MyAwIDAgMC0xLjYzNy00LjVsLS4wMTEtLjAxMy0uMDUtLjA1Ny0uMDItLjAyMi0uMDYzLS4wNzQtLjAwMi0uMDAxLS4wNzItLjA4LS4wMDEtLjAwMWMtLjA1LS4wNTQtLjEtLjEwNy0uMTUyLS4xNThsLS4wMDEtLjAwMi0uMDc1LS4wNzUtLjAwNS0uMDA0Yy0uMDIzLS4wMjQtLjA0Ny0uMDQ2LS4wNy0uMDY4bC0uMDI1LS4wMjMtLjA0Ny0uMDQ0LS4wMTYtLjAxNUE2Ljk2NiA2Ljk2NiAwIDAgMCAyNCAxNWE2Ljk3MyA2Ljk3MyAwIDAgMC00Ljc1NSAxLjg2M2wtLjAxNS4wMTUtLjA0Ny4wNDUtLjAyNS4wMjQtLjA3LjA2Ny0uMDA1LjAwNS0uMDc1LjA3NS0uMDAyLjAwMS0uMTUxLjE1OC0uMDAyLjAwMmEzLjMwOSAzLjMwOSAwIDAgMC0uMDcyLjA4aC0uMDAxYTEuNDM2IDEuNDM2IDAgMCAwLS4wNjQuMDc0bC0uMDIuMDIyYy0uMDE2LjAxOS0uMDMyLjA0LS4wNS4wNTgtLjAwMi4wMDUtLjAwNy4wMDgtLjAxLjAxM0E2Ljk3MyA2Ljk3MyAwIDAgMCAxNyAyMmMwIDEuNzE0LjYxNiAzLjI4MyAxLjYzOCA0LjVsLjAxLjAxNC4wNDkuMDU4LjAxOS4wMjIuMDY0LjA3My4wMDEuMDAzYy4wMjQuMDI3LjA0Ny4wNTMuMDcyLjA3OGwuMDAyLjAwMi4xNS4xNTguMDAxLjAwMS4wNzQuMDc0LjAwNC4wMDRBNi45ODcgNi45ODcgMCAwIDAgMjQgMjlhNi45NzMgNi45NzMgMCAwIDAgNC45MS0yLjAxMmwuMDA2LS4wMDRjLjAyNS0uMDI1LjA1LS4wNDkuMDczLS4wNzRsLjAwMi0uMDAxYTQuNzMgNC43MyAwIDAgMCAuMTUtLjE1OGwuMDAxLS4wMDJjLjAyNC0uMDI2LjA0OS0uMDUxLjA3Mi0uMDc4IDAtLjAwMS4wMDItLjAwMS4wMDItLjAwM2wuMDY0LS4wNzMuMDE4LS4wMjJjLjAyLS4wMi4wMzYtLjA0LjA1Mi0uMDU4em0uMDY0LTIuMjI4Yy0uMjE2LjUxLS41Ljk4MS0uODQ3IDEuNDFhNi45MzkgNi45MzkgMCAwIDAtMS4yNzMtLjg3NGMuMTgxLS43MzMuMjkzLTEuNTM4LjMyMy0yLjM4NGgyLjI0MmE1Ljg0MiA1Ljg0MiAwIDAgMS0uNDQ1IDEuODQ4em0uNDQ1LTIuNzIzaC0yLjI0MmExMS42ODEgMTEuNjgxIDAgMCAwLS4zMjMtMi4zODUgNi45MzkgNi45MzkgMCAwIDAgMS4yNzMtLjg3MyA1Ljg0MiA1Ljg0MiAwIDAgMSAxLjI5MiAzLjI1OHptLTMuNTczLTQuOTc3YTUuODQgNS44NCAwIDAgMSAxLjY4MSAxLjA4MWMtLjI4OS4yNDctLjYuNDY0LS45MjguNjUzLS4yNDUtLjcwMy0uNTYtMS4zMTQtLjkyNS0xLjgwMy4wNTguMDIyLjExNi4wNDYuMTcyLjA2OXpNMjQuODcgMjcuNTMzYTEuNzY4IDEuNzY4IDAgMCAxLS40MzMuMjU2di0yLjg5OGE2LjA4IDYuMDggMCAwIDEgMS44MDguNDA5Yy0uMTMuMzg0LS4yOC43NC0uNDUzIDEuMDYtLjI3Mi41MDYtLjU5LjkxLS45MjIgMS4xNzN6bS45MjItOS44OTJjLjE3Mi4zMjIuMzI0LjY3Ni40NTMgMS4wNTlhNi4wOCA2LjA4IDAgMCAxLTEuODA4LjQxdi0yLjg5N2MuMTQ0LjA1Ny4yOS4xNDIuNDMzLjI1Ni4zMzIuMjYuNjUuNjY1LjkyMiAxLjE3MnptLTEuMzU1IDYuMzczdi0xLjU3NmgyLjMwNWMtLjAyNS42OS0uMTEgMS4zNi0uMjU1IDEuOTk2bC0uMDA0LjAyYTYuOTUzIDYuOTUzIDAgMCAwLTIuMDQ1LS40NHptMC0yLjQ1MXYtMS41NzdhNi45NTMgNi45NTMgMCAwIDAgMi4wNDYtLjQ0bC4wMDUuMDJjLjE0My42MzYuMjMgMS4zMDQuMjU0IDEuOTk3aC0yLjMwNHptLS44NzUuODc1djEuNTc2YTYuOTUzIDYuOTUzIDAgMCAwLTIuMDQ1LjQ0bC0uMDA1LS4wMmExMC44MzUgMTAuODM1IDAgMCAxLS4yNTQtMS45OTZoMi4zMDV6bS0yLjMwNC0uODc1Yy4wMjUtLjY5MS4xMS0xLjM2MS4yNTUtMS45OTdsLjAwNC0uMDJhNi45NDMgNi45NDMgMCAwIDAgMi4wNDUuNDR2MS41NzdoLTIuMzA0em0yLjMwNSAzLjMyOHYyLjg5N2ExLjc0OCAxLjc0OCAwIDAgMS0uNDMzLS4yNTdjLS4zMzItLjI2LS42NTItLjY2Ny0uOTI0LTEuMTczYTcuMDYgNy4wNiAwIDAgMS0uNDUzLTEuMDYgNi4wOTggNi4wOTggMCAwIDEgMS44MS0uNDA3em0wLTUuNzgyYTYuMDggNi4wOCAwIDAgMS0xLjgwOC0uNDA5Yy4xMy0uMzg0LjI4LS43NC40NTMtMS4wNi4yNzItLjUwNi41OS0uOTEyLjkyMy0xLjE3M2ExLjggMS44IDAgMCAxIC40MzMtLjI1NnYyLjg5OGgtLjAwMnptLTEuODQ5LTIuNTIzYy4wNTgtLjAyMy4xMTQtLjA0Ny4xNzItLjA2OS0uMzY2LjQ5LS42OCAxLjEtLjkyNSAxLjgwM2E2LjA1NyA2LjA1NyAwIDAgMS0uOTI4LS42NTMgNS44NCA1Ljg0IDAgMCAxIDEuNjgxLTEuMDgxem0tMy4xMjggMy4xMjhjLjIxNi0uNTEuNS0uOTgxLjg0Ny0xLjQxLjM4OS4zMzcuODE1LjYzIDEuMjczLjg3NGExMS42ODEgMTEuNjgxIDAgMCAwLS4zMjMgMi4zODVIMTguMTRjLjA0Ny0uNjQuMTk3LTEuMjYuNDQ1LTEuODQ5em0tLjQ0NSAyLjcyNGgyLjI0MmMuMDMuODQ2LjE0MiAxLjY1MS4zMjMgMi4zODRhNi45MzkgNi45MzkgMCAwIDAtMS4yNzMuODczIDUuODQyIDUuODQyIDAgMCAxLTEuMjkyLTMuMjU4em0zLjU3MyA0Ljk3NmE1Ljg0IDUuODQgMCAwIDEtMS42ODEtMS4wODFjLjI4OS0uMjQ3LjYtLjQ2NC45MjgtLjY1My4yNDUuNzAzLjU2IDEuMzE0LjkyNSAxLjgwM2E1LjYyNCA1LjYyNCAwIDAgMS0uMTcyLS4wNjl6bTQuNTcyIDBhNi4xNjggNi4xNjggMCAwIDEtLjE3Mi4wNjljLjM2Ni0uNDkuNjgtMS4xLjkyNS0xLjgwMy4zMjguMTg3LjY0LjQwNi45MjguNjUzYTUuODQgNS44NCAwIDAgMS0xLjY4MSAxLjA4MXoiIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvZz48L3N2Zz4="
            />
            <Item
                type="node"
                size="40"
                shape="koni-custom-node"
                model={{
                    color: '#5CDBD3',
                    label: 'Person',
                    labelOffsetY: 28,
                    icon:
                        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyLjM1IDExLjUxNGwuMDEtLjAxNEE2Ljk2NiA2Ljk2NiAwIDAgMCAxNCA3YTYuOTczIDYuOTczIDAgMCAwLTEuNjM3LTQuNWwtLjAxMS0uMDEzLS4wNS0uMDU3LS4wMi0uMDIyLS4wNjMtLjA3NC0uMDAyLS4wMDEtLjA3Mi0uMDgtLjAwMS0uMDAxYy0uMDUtLjA1NC0uMS0uMTA3LS4xNTItLjE1OGwtLjAwMS0uMDAyLS4wNzUtLjA3NS0uMDA1LS4wMDQtLjA3LS4wNjgtLjAyNS0uMDIzLS4wNDctLjA0NC0uMDE2LS4wMTZBNi45NjYgNi45NjYgMCAwIDAgNyAwYTYuOTczIDYuOTczIDAgMCAwLTQuNzU1IDEuODYybC0uMDE1LjAxNi0uMDQ3LjA0NS0uMDI1LjAyNC0uMDcuMDY3LS4wMDUuMDA1LS4wNzUuMDc1LS4wMDIuMDAxLS4xNTEuMTU4LS4wMDIuMDAyYTMuMzA5IDMuMzA5IDAgMCAwLS4wNzIuMDhIMS43OGExLjQzNiAxLjQzNiAwIDAgMC0uMDY0LjA3NGwtLjAyLjAyMmMtLjAxNi4wMTktLjAzMi4wNC0uMDUuMDU4LS4wMDIuMDA1LS4wMDcuMDA4LS4wMS4wMTNBNi45NzMgNi45NzMgMCAwIDAgMCA3YzAgMS43MTQuNjE2IDMuMjgzIDEuNjM4IDQuNWwuMDEuMDE0LjA0OS4wNTguMDE5LjAyMi4wNjQuMDczLjAwMS4wMDNjLjAyNC4wMjcuMDQ3LjA1My4wNzIuMDc4bC4wMDIuMDAyLjE1LjE1OC4wMDEuMDAxLjA3NC4wNzQuMDA0LjAwNUE2Ljk4NyA2Ljk4NyAwIDAgMCA3IDE0YTYuOTczIDYuOTczIDAgMCAwIDQuOTEtMi4wMTJsLjAwNi0uMDA1Yy4wMjUtLjAyNS4wNS0uMDQ5LjA3My0uMDc0bC4wMDItLjAwMWE0LjczIDQuNzMgMCAwIDAgLjE1LS4xNThsLjAwMS0uMDAyYy4wMjQtLjAyNi4wNDktLjA1MS4wNzItLjA3OCAwLS4wMDEuMDAyLS4wMDEuMDAyLS4wMDMuMDIyLS4wMjMuMDQzLS4wNDguMDY0LS4wNzNsLjAxOC0uMDIyYy4wMi0uMDIuMDM2LS4wNC4wNTItLjA1OHptLjA2NC0yLjIyOGMtLjIxNi41MS0uNS45ODEtLjg0NyAxLjQxYTYuOTM5IDYuOTM5IDAgMCAwLTEuMjczLS44NzRjLjE4MS0uNzMzLjI5My0xLjUzOC4zMjMtMi4zODRoMi4yNDJhNS44NDIgNS44NDIgMCAwIDEtLjQ0NSAxLjg0OHptLjQ0NS0yLjcyM2gtMi4yNDJhMTEuNjgxIDExLjY4MSAwIDAgMC0uMzIzLTIuMzg1IDYuOTM5IDYuOTM5IDAgMCAwIDEuMjczLS44NzMgNS44NDIgNS44NDIgMCAwIDEgMS4yOTIgMy4yNTh6TTkuMjg2IDEuNTg1YTUuODQgNS44NCAwIDAgMSAxLjY4MSAxLjA4MWMtLjI4OS4yNDctLjYuNDY0LS45MjguNjUzLS4yNDUtLjcwMy0uNTYtMS4zMTQtLjkyNS0xLjgwMy4wNTguMDIyLjExNi4wNDYuMTcyLjA2OXpNNy44NyAxMi41MzNhMS43NjggMS43NjggMCAwIDEtLjQzMy4yNTZWOS44OTFhNi4wOCA2LjA4IDAgMCAxIDEuODA4LjQwOWMtLjEzLjM4NC0uMjguNzQtLjQ1MyAxLjA2LS4yNzIuNTA2LS41OS45MS0uOTIyIDEuMTczem0uOTIyLTkuODkyYy4xNzIuMzIxLjMyNC42NzYuNDUzIDEuMDU5YTYuMDggNi4wOCAwIDAgMS0xLjgwNy40MVYxLjIxMWMuMTQzLjA1OC4yODkuMTQzLjQzMi4yNTcuMzMyLjI2LjY1LjY2NS45MjIgMS4xNzJ6TTcuNDM4IDkuMDE0VjcuNDM4aDIuMzA0Yy0uMDI1LjY5LS4xMSAxLjM2LS4yNTUgMS45OTZsLS4wMDQuMDJhNi45NTMgNi45NTMgMCAwIDAtMi4wNDYtLjQ0em0wLTIuNDUxVjQuOTg2YTYuOTUzIDYuOTUzIDAgMCAwIDIuMDQ1LS40NGwuMDA1LjAyYy4xNDMuNjM2LjIzIDEuMzA0LjI1NCAxLjk5N0g3LjQzN3ptLS44NzUuODc1djEuNTc2YTYuOTUzIDYuOTUzIDAgMCAwLTIuMDQ2LjQ0bC0uMDA1LS4wMmExMC44MzUgMTAuODM1IDAgMCAxLS4yNTQtMS45OTZoMi4zMDR6bS0yLjMwNS0uODc1Yy4wMjUtLjY5MS4xMS0xLjM2MS4yNTUtMS45OTdsLjAwNC0uMDJhNi45NDMgNi45NDMgMCAwIDAgMi4wNDUuNDR2MS41NzdINC4yNTh6TTYuNTYyIDkuODl2Mi44OTZhMS43NDggMS43NDggMCAwIDEtLjQzMi0uMjU2Yy0uMzMyLS4yNi0uNjUyLS42NjctLjkyNC0xLjE3M2E3LjA2IDcuMDYgMCAwIDEtLjQ1My0xLjA2IDYuMDk4IDYuMDk4IDAgMCAxIDEuODEtLjQwN3ptMC01Ljc4MkE2LjA4IDYuMDggMCAwIDEgNC43NTUgMy43Yy4xMy0uMzg0LjI4LS43NC40NTMtMS4wNi4yNzItLjUwNi41OS0uOTEyLjkyMy0xLjE3M2ExLjggMS44IDAgMCAxIC40MzMtLjI1NnYyLjg5OGgtLjAwMnpNNC43MTUgMS41ODZjLjA1OC0uMDI0LjExNC0uMDQ3LjE3Mi0uMDY5LS4zNjYuNDktLjY4IDEuMS0uOTI1IDEuODAzYTYuMDU3IDYuMDU3IDAgMCAxLS45MjgtLjY1MyA1Ljg0IDUuODQgMCAwIDEgMS42ODEtMS4wODF6TTEuNTg2IDQuNzE0Yy4yMTYtLjUxLjUtLjk4MS44NDctMS40MS4zODkuMzM3LjgxNS42MyAxLjI3My44NzRhMTEuNjgxIDExLjY4MSAwIDAgMC0uMzIzIDIuMzg1SDEuMTRhNS44IDUuOCAwIDAgMSAuNDQ1LTEuODQ5ek0xLjE0IDcuNDM3aDIuMjQyYy4wMy44NDcuMTQyIDEuNjUyLjMyMyAyLjM4NWE2LjkzOSA2LjkzOSAwIDAgMC0xLjI3My44NzNBNS44NDIgNS44NDIgMCAwIDEgMS4xNCA3LjQzN3ptMy41NzMgNC45NzdhNS44NCA1Ljg0IDAgMCAxLTEuNjgxLTEuMDgxYy4yODktLjI0Ny42LS40NjQuOTI4LS42NTMuMjQ1LjcwMy41NiAxLjMxNC45MjUgMS44MDNhNS42MjQgNS42MjQgMCAwIDEtLjE3Mi0uMDY5em00LjU3MiAwYTYuMTY4IDYuMTY4IDAgMCAxLS4xNzIuMDY5Yy4zNjYtLjQ5LjY4LTEuMS45MjUtMS44MDMuMzI4LjE4Ny42NC40MDYuOTI4LjY1M2E1Ljg0IDUuODQgMCAwIDEtMS42ODEgMS4wODF6IiBmaWxsPSIjRkZGIi8+PC9zdmc+',
                }}
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxjaXJjbGUgaWQ9ImIiIGN4PSIyMCIgY3k9IjIwIiByPSIyMCIvPjxmaWx0ZXIgeD0iLTE3LjUlIiB5PSItMTIuNSUiIHdpZHRoPSIxMzUlIiBoZWlnaHQ9IjEzNSUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgaWQ9ImEiPjxmZU9mZnNldCBkeT0iMiIgaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9InNoYWRvd09mZnNldE91dGVyMSIvPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIiIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSIvPjxmZUNvbXBvc2l0ZSBpbj0ic2hhZG93Qmx1ck91dGVyMSIgaW4yPSJTb3VyY2VBbHBoYSIgb3BlcmF0b3I9Im91dCIgcmVzdWx0PSJzaGFkb3dCbHVyT3V0ZXIxIi8+PGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjA0IDAiIGluPSJzaGFkb3dCbHVyT3V0ZXIxIi8+PC9maWx0ZXI+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNCAyKSI+PHVzZSBmaWxsPSIjMDAwIiBmaWx0ZXI9InVybCgjYSkiIHhsaW5rOmhyZWY9IiNiIi8+PGNpcmNsZSBzdHJva2U9IiM1Q0RCRDMiIHN0cm9rZS1saW5lam9pbj0ic3F1YXJlIiBmaWxsLW9wYWNpdHk9Ii45MiIgZmlsbD0iIzVDREJEMyIgY3g9IjIwIiBjeT0iMjAiIHI9IjE5LjUiLz48L2c+PHBhdGggZD0iTTI5LjM1IDI2LjUxNGwuMDEtLjAxNEE2Ljk2NiA2Ljk2NiAwIDAgMCAzMSAyMmE2Ljk3MyA2Ljk3MyAwIDAgMC0xLjYzNy00LjVsLS4wMTEtLjAxMy0uMDUtLjA1Ny0uMDItLjAyMi0uMDYzLS4wNzQtLjAwMi0uMDAxLS4wNzItLjA4LS4wMDEtLjAwMWMtLjA1LS4wNTQtLjEtLjEwNy0uMTUyLS4xNThsLS4wMDEtLjAwMi0uMDc1LS4wNzUtLjAwNS0uMDA0Yy0uMDIzLS4wMjQtLjA0Ny0uMDQ2LS4wNy0uMDY4bC0uMDI1LS4wMjMtLjA0Ny0uMDQ0LS4wMTYtLjAxNUE2Ljk2NiA2Ljk2NiAwIDAgMCAyNCAxNWE2Ljk3MyA2Ljk3MyAwIDAgMC00Ljc1NSAxLjg2M2wtLjAxNS4wMTUtLjA0Ny4wNDUtLjAyNS4wMjQtLjA3LjA2Ny0uMDA1LjAwNS0uMDc1LjA3NS0uMDAyLjAwMS0uMTUxLjE1OC0uMDAyLjAwMmEzLjMwOSAzLjMwOSAwIDAgMC0uMDcyLjA4aC0uMDAxYTEuNDM2IDEuNDM2IDAgMCAwLS4wNjQuMDc0bC0uMDIuMDIyYy0uMDE2LjAxOS0uMDMyLjA0LS4wNS4wNTgtLjAwMi4wMDUtLjAwNy4wMDgtLjAxLjAxM0E2Ljk3MyA2Ljk3MyAwIDAgMCAxNyAyMmMwIDEuNzE0LjYxNiAzLjI4MyAxLjYzOCA0LjVsLjAxLjAxNC4wNDkuMDU4LjAxOS4wMjIuMDY0LjA3My4wMDEuMDAzYy4wMjQuMDI3LjA0Ny4wNTMuMDcyLjA3OGwuMDAyLjAwMi4xNS4xNTguMDAxLjAwMS4wNzQuMDc0LjAwNC4wMDRBNi45ODcgNi45ODcgMCAwIDAgMjQgMjlhNi45NzMgNi45NzMgMCAwIDAgNC45MS0yLjAxMmwuMDA2LS4wMDRjLjAyNS0uMDI1LjA1LS4wNDkuMDczLS4wNzRsLjAwMi0uMDAxYTQuNzMgNC43MyAwIDAgMCAuMTUtLjE1OGwuMDAxLS4wMDJjLjAyNC0uMDI2LjA0OS0uMDUxLjA3Mi0uMDc4IDAtLjAwMS4wMDItLjAwMS4wMDItLjAwM2wuMDY0LS4wNzMuMDE4LS4wMjJjLjAyLS4wMi4wMzYtLjA0LjA1Mi0uMDU4em0uMDY0LTIuMjI4Yy0uMjE2LjUxLS41Ljk4MS0uODQ3IDEuNDFhNi45MzkgNi45MzkgMCAwIDAtMS4yNzMtLjg3NGMuMTgxLS43MzMuMjkzLTEuNTM4LjMyMy0yLjM4NGgyLjI0MmE1Ljg0MiA1Ljg0MiAwIDAgMS0uNDQ1IDEuODQ4em0uNDQ1LTIuNzIzaC0yLjI0MmExMS42ODEgMTEuNjgxIDAgMCAwLS4zMjMtMi4zODUgNi45MzkgNi45MzkgMCAwIDAgMS4yNzMtLjg3MyA1Ljg0MiA1Ljg0MiAwIDAgMSAxLjI5MiAzLjI1OHptLTMuNTczLTQuOTc3YTUuODQgNS44NCAwIDAgMSAxLjY4MSAxLjA4MWMtLjI4OS4yNDctLjYuNDY0LS45MjguNjUzLS4yNDUtLjcwMy0uNTYtMS4zMTQtLjkyNS0xLjgwMy4wNTguMDIyLjExNi4wNDYuMTcyLjA2OXpNMjQuODcgMjcuNTMzYTEuNzY4IDEuNzY4IDAgMCAxLS40MzMuMjU2di0yLjg5OGE2LjA4IDYuMDggMCAwIDEgMS44MDguNDA5Yy0uMTMuMzg0LS4yOC43NC0uNDUzIDEuMDYtLjI3Mi41MDYtLjU5LjkxLS45MjIgMS4xNzN6bS45MjItOS44OTJjLjE3Mi4zMjIuMzI0LjY3Ni40NTMgMS4wNTlhNi4wOCA2LjA4IDAgMCAxLTEuODA4LjQxdi0yLjg5N2MuMTQ0LjA1Ny4yOS4xNDIuNDMzLjI1Ni4zMzIuMjYuNjUuNjY1LjkyMiAxLjE3MnptLTEuMzU1IDYuMzczdi0xLjU3NmgyLjMwNWMtLjAyNS42OS0uMTEgMS4zNi0uMjU1IDEuOTk2bC0uMDA0LjAyYTYuOTUzIDYuOTUzIDAgMCAwLTIuMDQ1LS40NHptMC0yLjQ1MXYtMS41NzdhNi45NTMgNi45NTMgMCAwIDAgMi4wNDYtLjQ0bC4wMDUuMDJjLjE0My42MzYuMjMgMS4zMDQuMjU0IDEuOTk3aC0yLjMwNHptLS44NzUuODc1djEuNTc2YTYuOTUzIDYuOTUzIDAgMCAwLTIuMDQ1LjQ0bC0uMDA1LS4wMmExMC44MzUgMTAuODM1IDAgMCAxLS4yNTQtMS45OTZoMi4zMDV6bS0yLjMwNC0uODc1Yy4wMjUtLjY5MS4xMS0xLjM2MS4yNTUtMS45OTdsLjAwNC0uMDJhNi45NDMgNi45NDMgMCAwIDAgMi4wNDUuNDR2MS41NzdoLTIuMzA0em0yLjMwNSAzLjMyOHYyLjg5N2ExLjc0OCAxLjc0OCAwIDAgMS0uNDMzLS4yNTdjLS4zMzItLjI2LS42NTItLjY2Ny0uOTI0LTEuMTczYTcuMDYgNy4wNiAwIDAgMS0uNDUzLTEuMDYgNi4wOTggNi4wOTggMCAwIDEgMS44MS0uNDA3em0wLTUuNzgyYTYuMDggNi4wOCAwIDAgMS0xLjgwOC0uNDA5Yy4xMy0uMzg0LjI4LS43NC40NTMtMS4wNi4yNzItLjUwNi41OS0uOTEyLjkyMy0xLjE3M2ExLjggMS44IDAgMCAxIC40MzMtLjI1NnYyLjg5OGgtLjAwMnptLTEuODQ5LTIuNTIzYy4wNTgtLjAyMy4xMTQtLjA0Ny4xNzItLjA2OS0uMzY2LjQ5LS42OCAxLjEtLjkyNSAxLjgwM2E2LjA1NyA2LjA1NyAwIDAgMS0uOTI4LS42NTMgNS44NCA1Ljg0IDAgMCAxIDEuNjgxLTEuMDgxem0tMy4xMjggMy4xMjhjLjIxNi0uNTEuNS0uOTgxLjg0Ny0xLjQxLjM4OS4zMzcuODE1LjYzIDEuMjczLjg3NGExMS42ODEgMTEuNjgxIDAgMCAwLS4zMjMgMi4zODVIMTguMTRjLjA0Ny0uNjQuMTk3LTEuMjYuNDQ1LTEuODQ5em0tLjQ0NSAyLjcyNGgyLjI0MmMuMDMuODQ2LjE0MiAxLjY1MS4zMjMgMi4zODRhNi45MzkgNi45MzkgMCAwIDAtMS4yNzMuODczIDUuODQyIDUuODQyIDAgMCAxLTEuMjkyLTMuMjU4em0zLjU3MyA0Ljk3NmE1Ljg0IDUuODQgMCAwIDEtMS42ODEtMS4wODFjLjI4OS0uMjQ3LjYtLjQ2NC45MjgtLjY1My4yNDUuNzAzLjU2IDEuMzE0LjkyNSAxLjgwM2E1LjYyNCA1LjYyNCAwIDAgMS0uMTcyLS4wNjl6bTQuNTcyIDBhNi4xNjggNi4xNjggMCAwIDEtLjE3Mi4wNjljLjM2Ni0uNDkuNjgtMS4xLjkyNS0xLjgwMy4zMjguMTg3LjY0LjQwNi45MjguNjUzYTUuODQgNS44NCAwIDAgMS0xLjY4MSAxLjA4MXoiIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvZz48L3N2Zz4="
            />
            <Item
                type="node"
                size="40"
                shape="koni-custom-node"
                model={{
                    color: '#B37FEB',
                    label: 'Country',
                    labelOffsetY: 28,
                    icon:
                        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyLjM1IDExLjUxNGwuMDEtLjAxNEE2Ljk2NiA2Ljk2NiAwIDAgMCAxNCA3YTYuOTczIDYuOTczIDAgMCAwLTEuNjM3LTQuNWwtLjAxMS0uMDEzLS4wNS0uMDU3LS4wMi0uMDIyLS4wNjMtLjA3NC0uMDAyLS4wMDEtLjA3Mi0uMDgtLjAwMS0uMDAxYy0uMDUtLjA1NC0uMS0uMTA3LS4xNTItLjE1OGwtLjAwMS0uMDAyLS4wNzUtLjA3NS0uMDA1LS4wMDQtLjA3LS4wNjgtLjAyNS0uMDIzLS4wNDctLjA0NC0uMDE2LS4wMTZBNi45NjYgNi45NjYgMCAwIDAgNyAwYTYuOTczIDYuOTczIDAgMCAwLTQuNzU1IDEuODYybC0uMDE1LjAxNi0uMDQ3LjA0NS0uMDI1LjAyNC0uMDcuMDY3LS4wMDUuMDA1LS4wNzUuMDc1LS4wMDIuMDAxLS4xNTEuMTU4LS4wMDIuMDAyYTMuMzA5IDMuMzA5IDAgMCAwLS4wNzIuMDhIMS43OGExLjQzNiAxLjQzNiAwIDAgMC0uMDY0LjA3NGwtLjAyLjAyMmMtLjAxNi4wMTktLjAzMi4wNC0uMDUuMDU4LS4wMDIuMDA1LS4wMDcuMDA4LS4wMS4wMTNBNi45NzMgNi45NzMgMCAwIDAgMCA3YzAgMS43MTQuNjE2IDMuMjgzIDEuNjM4IDQuNWwuMDEuMDE0LjA0OS4wNTguMDE5LjAyMi4wNjQuMDczLjAwMS4wMDNjLjAyNC4wMjcuMDQ3LjA1My4wNzIuMDc4bC4wMDIuMDAyLjE1LjE1OC4wMDEuMDAxLjA3NC4wNzQuMDA0LjAwNUE2Ljk4NyA2Ljk4NyAwIDAgMCA3IDE0YTYuOTczIDYuOTczIDAgMCAwIDQuOTEtMi4wMTJsLjAwNi0uMDA1Yy4wMjUtLjAyNS4wNS0uMDQ5LjA3My0uMDc0bC4wMDItLjAwMWE0LjczIDQuNzMgMCAwIDAgLjE1LS4xNThsLjAwMS0uMDAyYy4wMjQtLjAyNi4wNDktLjA1MS4wNzItLjA3OCAwLS4wMDEuMDAyLS4wMDEuMDAyLS4wMDMuMDIyLS4wMjMuMDQzLS4wNDguMDY0LS4wNzNsLjAxOC0uMDIyYy4wMi0uMDIuMDM2LS4wNC4wNTItLjA1OHptLjA2NC0yLjIyOGMtLjIxNi41MS0uNS45ODEtLjg0NyAxLjQxYTYuOTM5IDYuOTM5IDAgMCAwLTEuMjczLS44NzRjLjE4MS0uNzMzLjI5My0xLjUzOC4zMjMtMi4zODRoMi4yNDJhNS44NDIgNS44NDIgMCAwIDEtLjQ0NSAxLjg0OHptLjQ0NS0yLjcyM2gtMi4yNDJhMTEuNjgxIDExLjY4MSAwIDAgMC0uMzIzLTIuMzg1IDYuOTM5IDYuOTM5IDAgMCAwIDEuMjczLS44NzMgNS44NDIgNS44NDIgMCAwIDEgMS4yOTIgMy4yNTh6TTkuMjg2IDEuNTg1YTUuODQgNS44NCAwIDAgMSAxLjY4MSAxLjA4MWMtLjI4OS4yNDctLjYuNDY0LS45MjguNjUzLS4yNDUtLjcwMy0uNTYtMS4zMTQtLjkyNS0xLjgwMy4wNTguMDIyLjExNi4wNDYuMTcyLjA2OXpNNy44NyAxMi41MzNhMS43NjggMS43NjggMCAwIDEtLjQzMy4yNTZWOS44OTFhNi4wOCA2LjA4IDAgMCAxIDEuODA4LjQwOWMtLjEzLjM4NC0uMjguNzQtLjQ1MyAxLjA2LS4yNzIuNTA2LS41OS45MS0uOTIyIDEuMTczem0uOTIyLTkuODkyYy4xNzIuMzIxLjMyNC42NzYuNDUzIDEuMDU5YTYuMDggNi4wOCAwIDAgMS0xLjgwNy40MVYxLjIxMWMuMTQzLjA1OC4yODkuMTQzLjQzMi4yNTcuMzMyLjI2LjY1LjY2NS45MjIgMS4xNzJ6TTcuNDM4IDkuMDE0VjcuNDM4aDIuMzA0Yy0uMDI1LjY5LS4xMSAxLjM2LS4yNTUgMS45OTZsLS4wMDQuMDJhNi45NTMgNi45NTMgMCAwIDAtMi4wNDYtLjQ0em0wLTIuNDUxVjQuOTg2YTYuOTUzIDYuOTUzIDAgMCAwIDIuMDQ1LS40NGwuMDA1LjAyYy4xNDMuNjM2LjIzIDEuMzA0LjI1NCAxLjk5N0g3LjQzN3ptLS44NzUuODc1djEuNTc2YTYuOTUzIDYuOTUzIDAgMCAwLTIuMDQ2LjQ0bC0uMDA1LS4wMmExMC44MzUgMTAuODM1IDAgMCAxLS4yNTQtMS45OTZoMi4zMDR6bS0yLjMwNS0uODc1Yy4wMjUtLjY5MS4xMS0xLjM2MS4yNTUtMS45OTdsLjAwNC0uMDJhNi45NDMgNi45NDMgMCAwIDAgMi4wNDUuNDR2MS41NzdINC4yNTh6TTYuNTYyIDkuODl2Mi44OTZhMS43NDggMS43NDggMCAwIDEtLjQzMi0uMjU2Yy0uMzMyLS4yNi0uNjUyLS42NjctLjkyNC0xLjE3M2E3LjA2IDcuMDYgMCAwIDEtLjQ1My0xLjA2IDYuMDk4IDYuMDk4IDAgMCAxIDEuODEtLjQwN3ptMC01Ljc4MkE2LjA4IDYuMDggMCAwIDEgNC43NTUgMy43Yy4xMy0uMzg0LjI4LS43NC40NTMtMS4wNi4yNzItLjUwNi41OS0uOTEyLjkyMy0xLjE3M2ExLjggMS44IDAgMCAxIC40MzMtLjI1NnYyLjg5OGgtLjAwMnpNNC43MTUgMS41ODZjLjA1OC0uMDI0LjExNC0uMDQ3LjE3Mi0uMDY5LS4zNjYuNDktLjY4IDEuMS0uOTI1IDEuODAzYTYuMDU3IDYuMDU3IDAgMCAxLS45MjgtLjY1MyA1Ljg0IDUuODQgMCAwIDEgMS42ODEtMS4wODF6TTEuNTg2IDQuNzE0Yy4yMTYtLjUxLjUtLjk4MS44NDctMS40MS4zODkuMzM3LjgxNS42MyAxLjI3My44NzRhMTEuNjgxIDExLjY4MSAwIDAgMC0uMzIzIDIuMzg1SDEuMTRhNS44IDUuOCAwIDAgMSAuNDQ1LTEuODQ5ek0xLjE0IDcuNDM3aDIuMjQyYy4wMy44NDcuMTQyIDEuNjUyLjMyMyAyLjM4NWE2LjkzOSA2LjkzOSAwIDAgMC0xLjI3My44NzNBNS44NDIgNS44NDIgMCAwIDEgMS4xNCA3LjQzN3ptMy41NzMgNC45NzdhNS44NCA1Ljg0IDAgMCAxLTEuNjgxLTEuMDgxYy4yODktLjI0Ny42LS40NjQuOTI4LS42NTMuMjQ1LjcwMy41NiAxLjMxNC45MjUgMS44MDNhNS42MjQgNS42MjQgMCAwIDEtLjE3Mi0uMDY5em00LjU3MiAwYTYuMTY4IDYuMTY4IDAgMCAxLS4xNzIuMDY5Yy4zNjYtLjQ5LjY4LTEuMS45MjUtMS44MDMuMzI4LjE4Ny42NC40MDYuOTI4LjY1M2E1Ljg0IDUuODQgMCAwIDEtMS42ODEgMS4wODF6IiBmaWxsPSIjRkZGIi8+PC9zdmc+',
                }}
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxjaXJjbGUgaWQ9ImIiIGN4PSIyMCIgY3k9IjIwIiByPSIyMCIvPjxmaWx0ZXIgeD0iLTE3LjUlIiB5PSItMTIuNSUiIHdpZHRoPSIxMzUlIiBoZWlnaHQ9IjEzNSUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgaWQ9ImEiPjxmZU9mZnNldCBkeT0iMiIgaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9InNoYWRvd09mZnNldE91dGVyMSIvPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIiIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSIvPjxmZUNvbXBvc2l0ZSBpbj0ic2hhZG93Qmx1ck91dGVyMSIgaW4yPSJTb3VyY2VBbHBoYSIgb3BlcmF0b3I9Im91dCIgcmVzdWx0PSJzaGFkb3dCbHVyT3V0ZXIxIi8+PGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjA0IDAiIGluPSJzaGFkb3dCbHVyT3V0ZXIxIi8+PC9maWx0ZXI+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNCAyKSI+PHVzZSBmaWxsPSIjMDAwIiBmaWx0ZXI9InVybCgjYSkiIHhsaW5rOmhyZWY9IiNiIi8+PGNpcmNsZSBzdHJva2U9IiNCMzdGRUIiIHN0cm9rZS1saW5lam9pbj0ic3F1YXJlIiBmaWxsLW9wYWNpdHk9Ii45MiIgZmlsbD0iI0IzN0ZFQiIgY3g9IjIwIiBjeT0iMjAiIHI9IjE5LjUiLz48L2c+PHBhdGggZD0iTTI5LjM1IDI2LjUxNGwuMDEtLjAxNEE2Ljk2NiA2Ljk2NiAwIDAgMCAzMSAyMmE2Ljk3MyA2Ljk3MyAwIDAgMC0xLjYzNy00LjVsLS4wMTEtLjAxMy0uMDUtLjA1Ny0uMDItLjAyMi0uMDYzLS4wNzQtLjAwMi0uMDAxLS4wNzItLjA4LS4wMDEtLjAwMWMtLjA1LS4wNTQtLjEtLjEwNy0uMTUyLS4xNThsLS4wMDEtLjAwMi0uMDc1LS4wNzUtLjAwNS0uMDA0Yy0uMDIzLS4wMjQtLjA0Ny0uMDQ2LS4wNy0uMDY4bC0uMDI1LS4wMjMtLjA0Ny0uMDQ0LS4wMTYtLjAxNUE2Ljk2NiA2Ljk2NiAwIDAgMCAyNCAxNWE2Ljk3MyA2Ljk3MyAwIDAgMC00Ljc1NSAxLjg2M2wtLjAxNS4wMTUtLjA0Ny4wNDUtLjAyNS4wMjQtLjA3LjA2Ny0uMDA1LjAwNS0uMDc1LjA3NS0uMDAyLjAwMS0uMTUxLjE1OC0uMDAyLjAwMmEzLjMwOSAzLjMwOSAwIDAgMC0uMDcyLjA4aC0uMDAxYTEuNDM2IDEuNDM2IDAgMCAwLS4wNjQuMDc0bC0uMDIuMDIyYy0uMDE2LjAxOS0uMDMyLjA0LS4wNS4wNTgtLjAwMi4wMDUtLjAwNy4wMDgtLjAxLjAxM0E2Ljk3MyA2Ljk3MyAwIDAgMCAxNyAyMmMwIDEuNzE0LjYxNiAzLjI4MyAxLjYzOCA0LjVsLjAxLjAxNC4wNDkuMDU4LjAxOS4wMjIuMDY0LjA3My4wMDEuMDAzYy4wMjQuMDI3LjA0Ny4wNTMuMDcyLjA3OGwuMDAyLjAwMi4xNS4xNTguMDAxLjAwMS4wNzQuMDc0LjAwNC4wMDRBNi45ODcgNi45ODcgMCAwIDAgMjQgMjlhNi45NzMgNi45NzMgMCAwIDAgNC45MS0yLjAxMmwuMDA2LS4wMDRjLjAyNS0uMDI1LjA1LS4wNDkuMDczLS4wNzRsLjAwMi0uMDAxYTQuNzMgNC43MyAwIDAgMCAuMTUtLjE1OGwuMDAxLS4wMDJjLjAyNC0uMDI2LjA0OS0uMDUxLjA3Mi0uMDc4IDAtLjAwMS4wMDItLjAwMS4wMDItLjAwM2wuMDY0LS4wNzMuMDE4LS4wMjJjLjAyLS4wMi4wMzYtLjA0LjA1Mi0uMDU4em0uMDY0LTIuMjI4Yy0uMjE2LjUxLS41Ljk4MS0uODQ3IDEuNDFhNi45MzkgNi45MzkgMCAwIDAtMS4yNzMtLjg3NGMuMTgxLS43MzMuMjkzLTEuNTM4LjMyMy0yLjM4NGgyLjI0MmE1Ljg0MiA1Ljg0MiAwIDAgMS0uNDQ1IDEuODQ4em0uNDQ1LTIuNzIzaC0yLjI0MmExMS42ODEgMTEuNjgxIDAgMCAwLS4zMjMtMi4zODUgNi45MzkgNi45MzkgMCAwIDAgMS4yNzMtLjg3MyA1Ljg0MiA1Ljg0MiAwIDAgMSAxLjI5MiAzLjI1OHptLTMuNTczLTQuOTc3YTUuODQgNS44NCAwIDAgMSAxLjY4MSAxLjA4MWMtLjI4OS4yNDctLjYuNDY0LS45MjguNjUzLS4yNDUtLjcwMy0uNTYtMS4zMTQtLjkyNS0xLjgwMy4wNTguMDIyLjExNi4wNDYuMTcyLjA2OXpNMjQuODcgMjcuNTMzYTEuNzY4IDEuNzY4IDAgMCAxLS40MzMuMjU2di0yLjg5OGE2LjA4IDYuMDggMCAwIDEgMS44MDguNDA5Yy0uMTMuMzg0LS4yOC43NC0uNDUzIDEuMDYtLjI3Mi41MDYtLjU5LjkxLS45MjIgMS4xNzN6bS45MjItOS44OTJjLjE3Mi4zMjIuMzI0LjY3Ni40NTMgMS4wNTlhNi4wOCA2LjA4IDAgMCAxLTEuODA4LjQxdi0yLjg5N2MuMTQ0LjA1Ny4yOS4xNDIuNDMzLjI1Ni4zMzIuMjYuNjUuNjY1LjkyMiAxLjE3MnptLTEuMzU1IDYuMzczdi0xLjU3NmgyLjMwNWMtLjAyNS42OS0uMTEgMS4zNi0uMjU1IDEuOTk2bC0uMDA0LjAyYTYuOTUzIDYuOTUzIDAgMCAwLTIuMDQ1LS40NHptMC0yLjQ1MXYtMS41NzdhNi45NTMgNi45NTMgMCAwIDAgMi4wNDYtLjQ0bC4wMDUuMDJjLjE0My42MzYuMjMgMS4zMDQuMjU0IDEuOTk3aC0yLjMwNHptLS44NzUuODc1djEuNTc2YTYuOTUzIDYuOTUzIDAgMCAwLTIuMDQ1LjQ0bC0uMDA1LS4wMmExMC44MzUgMTAuODM1IDAgMCAxLS4yNTQtMS45OTZoMi4zMDV6bS0yLjMwNC0uODc1Yy4wMjUtLjY5MS4xMS0xLjM2MS4yNTUtMS45OTdsLjAwNC0uMDJhNi45NDMgNi45NDMgMCAwIDAgMi4wNDUuNDR2MS41NzdoLTIuMzA0em0yLjMwNSAzLjMyOHYyLjg5N2ExLjc0OCAxLjc0OCAwIDAgMS0uNDMzLS4yNTdjLS4zMzItLjI2LS42NTItLjY2Ny0uOTI0LTEuMTczYTcuMDYgNy4wNiAwIDAgMS0uNDUzLTEuMDYgNi4wOTggNi4wOTggMCAwIDEgMS44MS0uNDA3em0wLTUuNzgyYTYuMDggNi4wOCAwIDAgMS0xLjgwOC0uNDA5Yy4xMy0uMzg0LjI4LS43NC40NTMtMS4wNi4yNzItLjUwNi41OS0uOTEyLjkyMy0xLjE3M2ExLjggMS44IDAgMCAxIC40MzMtLjI1NnYyLjg5OGgtLjAwMnptLTEuODQ5LTIuNTIzYy4wNTgtLjAyMy4xMTQtLjA0Ny4xNzItLjA2OS0uMzY2LjQ5LS42OCAxLjEtLjkyNSAxLjgwM2E2LjA1NyA2LjA1NyAwIDAgMS0uOTI4LS42NTMgNS44NCA1Ljg0IDAgMCAxIDEuNjgxLTEuMDgxem0tMy4xMjggMy4xMjhjLjIxNi0uNTEuNS0uOTgxLjg0Ny0xLjQxLjM4OS4zMzcuODE1LjYzIDEuMjczLjg3NGExMS42ODEgMTEuNjgxIDAgMCAwLS4zMjMgMi4zODVIMTguMTRjLjA0Ny0uNjQuMTk3LTEuMjYuNDQ1LTEuODQ5em0tLjQ0NSAyLjcyNGgyLjI0MmMuMDMuODQ2LjE0MiAxLjY1MS4zMjMgMi4zODRhNi45MzkgNi45MzkgMCAwIDAtMS4yNzMuODczIDUuODQyIDUuODQyIDAgMCAxLTEuMjkyLTMuMjU4em0zLjU3MyA0Ljk3NmE1Ljg0IDUuODQgMCAwIDEtMS42ODEtMS4wODFjLjI4OS0uMjQ3LjYtLjQ2NC45MjgtLjY1My4yNDUuNzAzLjU2IDEuMzE0LjkyNSAxLjgwM2E1LjYyNCA1LjYyNCAwIDAgMS0uMTcyLS4wNjl6bTQuNTcyIDBhNi4xNjggNi4xNjggMCAwIDEtLjE3Mi4wNjljLjM2Ni0uNDkuNjgtMS4xLjkyNS0xLjgwMy4zMjguMTg3LjY0LjQwNi45MjguNjUzYTUuODQgNS44NCAwIDAgMS0xLjY4MSAxLjA4MXoiIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvZz48L3N2Zz4="
            />
        </Card>
    </ItemPanel>
);

export default KoniItemPanel;
