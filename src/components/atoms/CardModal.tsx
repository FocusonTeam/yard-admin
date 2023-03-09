import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button } from './Button';

export type CardModalProps = {
  active: boolean;
  closeEvent: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  title: string;
  children: React.ReactNode;
  actionMsg: string;
  actionEvent?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
};

const CardModal = ({ closeEvent, title, children, actionMsg, actionEvent }: CardModalProps) => {
  return (
    <>
      <CardModalContainer>
        <h3>{title}</h3>
        <div className="msg">{children}</div>
        <div className="action_box">
          <Button onClick={closeEvent} label="닫기" tailStyle='text-black text-center mx-2 px-3 py-1 font-semibold border-2 rounded-md hover:bg-slate-100'/>
          {actionMsg === "삭제" ? (
            <Button onClick={actionEvent} label={actionMsg} tailStyle='text-red-700 text-center px-3 py-1 border-red-700 mx-2 font-semibold border-2 rounded-md hover:bg-red-200' />
          ) : (
            <Button onClick={actionEvent} label={actionMsg} tailStyle='text-blue-700 text-center px-3 py-1 border-blue-700 mx-2 font-semibold border-2 rounded-md hover:bg-blue-200' />
          )}
        </div>
      </CardModalContainer>
    </>
  );
};

CardModal.defaultProps = {
  active: false,
};

const CardModalContainer = styled.div`
  h3 {
    font-size: 1.5rem;
    font-weight: bold;
  }

  .msg {
    line-height: 1.5;
    font-size: 1rem;
    color: rgb(73, 80, 87);
    margin-top: 1rem;
    margin-bottom: 1rem;
    white-space: pre-wrap;
  }

  .action_box {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`;

export default CardModal;