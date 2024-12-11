配点 : $300$ 点

## 問題文

AtCoderでは、コンテストに参加すると「色」が付き、これはレートによって次のように変化します：  

- レート $1$-$399$：灰色
- レート $400$-$799$：茶色
- レート $800$-$1199$：緑色
- レート $1200$-$1599$：水色
- レート $1600$-$1999$：青色
- レート $2000$-$2399$：黄色
- レート $2400$-$2799$：橙色
- レート $2800$-$3199$：赤色

また、レートが $3200$ 以上になると色を自由に変えることができます。<br>
現在 $N$ 人の人がAtCoderのコンテストに参加したことがあり、$i$ 人目の人のレートは $a_i$ です。<br>
そのとき、色の種類数の最小値と最大値を求めなさい。

## 制約

- $1 \leq N \leq 100$
- $1 \leq a_i \leq 4800$
- $a_i$ は整数である。

## 入力

入力は以下の形式で標準入力から与えられる。  

> $N$
> 
> $a_1$ $a_2$ $...$ $a_N$

## 出力

色の種類数の最小値、最大値をこの順で空白区切りで出力しなさい。

```input1
4
2100 2500 2700 2700
```

```output1
2 2
```

レート $2100$ の人は「黄色」であり、それ以外の人は「橙色」なので、色の種類数は $2$ となる。

```input2
5
1100 1900 2800 3200 3200
```

```output2
3 5
```

レート $1100$ の人は「緑色」、レート $1900$ の人は「青色」、レート $2800$ の人は「赤色」である。<br>
$4$ 人目が「赤色」を選び、$5$ 人目が「青色」を選んだ時、色の種類数は $3$ であり、これは最小値を取る一つの例である。<br>
$4$ 人目が「紫色」を選び、$5$ 人目が「黒色」を選んだ時、色の種類数は $5$ であり、これは最大値を取る一つの例である。

```input3
20
800 810 820 830 840 850 860 870 880 890 900 910 920 930 940 950 960 970 980 990
```

```output3
1 1
```

この場合全員が「緑色」である。よって色の種類数は $1$ となる。