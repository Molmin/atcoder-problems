配点 : $600$ 点

## 問題文

AtCoder 国には、都市 $1$ から都市 $N$ までの $N$ 個の都市と運河 $1$ から運河 $N$ までの $N$ 本の運河があります。<br>
運河 $i$ は都市 $i$ と都市 $A_i$ を双方向に繋いでおり、通行料は $C_i$ 円です。運河を通るには通行料を払う必要がありますが、$1$ 度払えばその運河は任意の方向に何度でも使うことができます。<br>
どの都市からどの都市へも、運河をいくつか使って辿り着けることが保証されます。  

あなたは AtCoder 国で $M$ 個の荷物配送を任されました。$i$ 個目の荷物は都市 $X_i$ から都市 $Y_i$ へと運ばなければなりません。<br>
荷物を運ぶ手段は運河以外にありませんが、あなた自身は運河を使わずとも都市間を自由に移動することができます。

$M$ 個の荷物全てを配送するとき、払う通行料の合計として考えられる最小値を求めてください。  

## 制約

- $3 \le N \le 2 \times 10^5$
- $1 \le M \le 2 \times 10^5$
- $1 \le A_i \le N$
- $A_i \neq i$
- $1 \le C_i \le 10^9$
- どの都市からどの都市へも、運河をいくつか使って辿り着ける
- $1 \le X_i \le N$
- $1 \le Y_i \le N$
- $X_i \neq Y_i$
- 入力に含まれる値は全て整数である

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $M$
> 
> $A_1$ $C_1$
> 
> $A_2$ $C_2$
> 
> $A_3$ $C_3$
> 
> $\hspace{13pt} \vdots$
> 
> $A_N$ $C_N$
> 
> $X_1$ $Y_1$
> 
> $X_2$ $Y_2$
> 
> $X_3$ $Y_3$
> 
> $\hspace{13pt} \vdots$
> 
> $X_M$ $Y_M$

## 出力

払う通行料の合計として考えられる最小値 [円] を出力せよ。  

```input1
4 2
3 3
1 7
2 5
1 2
4 3
2 1
```

```output1
10
```

都市と運河の配置は以下の図のようになっています。<br>
運河を表す線に書かれている数は、その運河の通行料を表します。<br>
![図](https://img.atcoder.jp/ghi/00d4990e6b1dd2b0c18ce27618430f91.png)  

以下のように配送すると、払う必要のある通行料は $10$ 円になります。  

- $1$ 個目の荷物 : 運河 $1, 4$ を使って、都市 $4, 1, 3$ の順に運ぶ
- $2$ 個目の荷物 : 運河 $3, 1$ を使って、都市 $2, 3, 1$ の順に運ぶ

```input2
5 2
2 2
5 5
5 7
2 4
3 10
3 5
4 1
```

```output2
13
```

同じ都市の組を結ぶ運河が複数ある可能性があります。  

```input3
11 4
8 1
9 9
8 10
8 3
1 2
11 3
9 2
6 5
3 4
1 7
3 2
7 8
10 1
4 9
11 6
```

```output3
26
```