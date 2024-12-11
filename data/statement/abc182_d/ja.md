配点 : $400$ 点

## 問題文

数列 $A_1, A_2, A_3, \dots, A_N$ が与えられます。 この数列は負の要素を含むかもしれません。<br>
数直線上の座標 $0$ に置かれているロボットが、以下の動作を順に行います。  

- 正の向きに $A_1$ 進む。
- 正の向きに $A_1$ 進み、正の向きに $A_2$ 進む。
- 正の向きに $A_1$ 進み、正の向きに $A_2$ 進み、正の向きに $A_3$ 進む。

$\hspace{140pt} \vdots$  

- 正の向きに $A_1$ 進み、正の向きに $A_2$ 進み、正の向きに $A_3$ 進み、$\dots$ 、正の向きに $A_N$ 進む。

動作開始時から終了時までのロボットの座標の最大値を求めてください。  

## 制約

- $1 \le N \le 200000$
- $-10^8 \le A_i \le 10^8$
- 入力はすべて整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $A_1 \hspace{7pt} A_2 \hspace{7pt} A_3 \hspace{5pt} \dots \hspace{5pt} A_N$

## 出力

動作開始時から終了時までのロボットの座標の最大値を出力せよ。  

```input1
3
2 -1 -2
```

```output1
5
```

ロボットは以下のように動きます。

- 正の向きに $2$ 進み、座標が $2$ になる。
- 正の向きに $2$ 進み、座標が $4$ になる。続けて正の向きに $-1$ 進み、座標が $3$ になる。
- 正の向きに $2$ 進み、座標が $5$ になる。続けて正の向きに $-1$ 進み、座標が $4$ になる。更に正の向きに $-2$ 進み、座標が $2$ になる。

動作中の座標の最大値は $5$ なので、 $5$ を出力してください。

```input2
5
-2 1 3 -1 -1
```

```output2
2
```

```input3
5
-1000 -1000 -1000 -1000 -1000
```

```output3
0
```

この場合最初にいた座標 $0$ が最大値です。