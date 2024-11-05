import React from "react";
import "./WalletMain.css";

import arrowBack from "../icons/top-nav/Arrow Back.svg";
import arrowDown from "../icons/top-nav/Arrow Down.svg";
import menuDots from "../icons/top-nav/Menu Dots.svg";

import deposit from "../icons/balance/deposit.svg";
import send from "../icons/balance/send.svg";
import transactions from "../icons/balance/transactions.svg";

import sort from "../icons/transactions/Sort.svg";
import usdt from "../icons/transactions/usdt.svg";
import uah from "../icons/transactions/uah.svg";

import home from "../icons/app-nav/Home.svg"
import transfers from "../icons/app-nav/transfers.svg"
import settgins from "../icons/app-nav/Settings.svg"

const WalletMain = () => {
  return (
    <div className="body">
      <div className="top-nav">
        <div className="go-back">
          <img src={arrowBack} alt="" />
          <h2>Сrypto Wallet</h2>
        </div>
        <div className="controls">
          <img src={arrowDown} alt="" />
          <img src={menuDots} alt="" />
        </div>
      </div>

      <div className="app-nav">
        <img src={home} alt="" />
        <img src={transfers} alt="" />
        <img src={settgins} alt="" />
      </div>

      <main>
        {/*  balance-block && transactions */}
        <div className="balance">
          <h2>Мой счет</h2>

          <div className="money">
            <p className="my-money">₴ 32,453.45</p>
            <p className="interest">+96.11%</p>
          </div>

          <div className="control-balance">
            <button id="deposit">
              <img src={deposit} alt="" />
              <p>Депозит</p>
            </button>
            <button id="send-money">
              <img src={send} alt="" />
              <p>Отправить</p>
            </button>
            <button id="transactions">
              <img src={transactions} alt="" />
              <p>Транзакции</p>
            </button>
          </div>
        </div>

        <div className="transactions">
          <div className="info">
            <p className="last-transactions">Последние транзакции</p>
            <div className="sort">
              <p>Сортировать</p>
              <img src={sort} alt="" />
            </div>
          </div>
          <ul>

            <li>
              <div className="info-transfer">
                <img src={usdt} alt="" />
                <div className="text-info">
                  <h2>USDT</h2>
                  <p>$1.00  <span>+0.01%</span></p>
                </div>
              </div>
              <div className="data">
                <p className="count-money plus">+2,635.48 USDT</p>
                <p className="time">01-11-24 18:24</p>
              </div>
            </li>

            <li>
              <div className="info-transfer">
                <img src={uah} alt="" />
                <div className="text-info">
                  <h2>UAH</h2>
                  <p>$0.024  <span>+1.2%</span></p>
                </div>
              </div>
              <div className="data">
                <p className="count-money minus">-3,736.93 UAH</p>
                <p className="time">31-10-24 17:33</p>
              </div>
            </li>

            <li>
              <div className="info-transfer">
                <img src={usdt} alt="" />
                <div className="text-info">
                  <h2>USDT</h2>
                  <p>$1.00  <span>+0.01%</span></p>
                </div>
              </div>
              <div className="data">
                <p className="count-money plus">+12,234.09 USDT</p>
                <p className="time">30-10-24 06:31</p>
              </div>
            </li>

            <li>
              <div className="info-transfer">
                <img src={uah} alt="" />
                <div className="text-info">
                  <h2>UAH</h2>
                  <p>$0.024  <span>+1.2%</span></p>
                </div>
              </div>
              <div className="data">
                <p className="count-money plus">+20,000 UAH</p>
                <p className="time">28-10-24 09:15</p>
              </div>
            </li>

            <li>
              <div className="info-transfer">
                <img src={uah} alt="" />
                <div className="text-info">
                  <h2>UAH</h2>
                  <p>$0.024  <span>+1.2%</span></p>
                </div>
              </div>
              <div className="data">
                <p className="count-money minus">-14,734 UAH</p>
                <p className="time">26-10-24 21:44</p>
              </div>
            </li>

          </ul>
        </div>
      </main>

      <div className="app-nav"></div>
    </div>
  );
};

export default WalletMain;
