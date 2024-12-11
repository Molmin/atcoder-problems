配点 : $400$ 点

## 問題文

AtCoder 食堂では $N$ 種類の主菜と $M$ 種類の副菜が提供されており、$i$ 種類目の主菜の価格は $A_i$、$j$ 種類目の副菜の価格は $B_j$ です。
AtCoder 食堂では新たに定食のメニューを設けることを検討しています。
定食は $1$ 種類の主菜と $1$ 種類の副菜から構成され、主菜と副菜の価格の和を $s$ としたとき、定食の価格は $\min(s,P)$ です。
ここで、$P$ は入力で与えられる定数です。

定食を構成する主菜と副菜の選び方は $NM$ 通りありますが、それらすべてに対する定食の価格の総和を求めてください。

## 制約

- $1\leq N,M \leq 2\times 10^5$
- $1\leq A_i,B_j \leq 10^8$
- $1\leq P \leq 2\times 10^8$
- 入力は全て整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $M$ $P$
> 
> $A_1$ $A_2$ $\dots$ $A_N$
> 
> $B_1$ $B_2$ $\dots$ $B_M$

## 出力

答えを整数として出力せよ。
なお、本問題の制約下では、答えは $64$ bit 符号付き整数型の範囲に収まることが証明できる。

```input1
2 2 7
3 5
6 1
```

```output1
24
```

- $1$ 種類目の主菜と $1$ 種類目の副菜を選んだ場合、定食の価格は $\min(3+6,7)=7$ です。
- $1$ 種類目の主菜と $2$ 種類目の副菜を選んだ場合、定食の価格は $\min(3+1,7)=4$ です。
- $2$ 種類目の主菜と $1$ 種類目の副菜を選んだ場合、定食の価格は $\min(5+6,7)=7$ です。
- $2$ 種類目の主菜と $2$ 種類目の副菜を選んだ場合、定食の価格は $\min(5+1,7)=6$ です。

よって、答えは $7+4+7+6=24$ です。

```input2
1 3 2
1
1 1 1
```

```output2
6
```

```input3
7 12 25514963
2436426 24979445 61648772 23690081 33933447 76190629 62703497
11047202 71407775 28894325 31963982 22804784 50968417 30302156 82631932 61735902 80895728 23078537 7723857
```

```output3
2115597124
```