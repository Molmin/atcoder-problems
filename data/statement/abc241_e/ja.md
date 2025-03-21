配点 : $500$ 点

## 問題文

長さ $N$ の数列 $A=(A_0,A_1,\ldots,A_{N-1})$ が与えられます。<br>
最初の時点では空の皿があり、高橋君は次の操作を $K$ 回繰り返します。

- 皿の中のアメの個数を $X$ とする。皿に $A_{(X\bmod N)}$ 個のアメを追加する。
ただし、$X\bmod N$ で $X$ を $N$ で割った余りを表す。

$K$ 回の操作の後で、皿の中には何個のアメがあるか求めてください。

## 制約

- $2 \leq N \leq 2\times 10^5$
- $1 \leq K \leq 10^{12}$
- $1 \leq A_i\leq 10^6$
- 入力はすべて整数である。

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $K$
> 
> $A_0$ $A_1$ $\ldots$ $A_{N-1}$

## 出力

答えを出力せよ。

```input1
5 3
2 1 6 3 1
```

```output1
11
```

皿の中のアメの個数は次のように変化します。

- $1$ 回目の操作において、$X=0$ であるので、アメは $A_{(0\mod 5)}=A_0=2$ 個追加されます。
- $2$ 回目の操作において、$X=2$ であるので、アメは $A_{(2\mod 5)}=A_2=6$ 個追加されます。
- $3$ 回目の操作において、$X=8$ であるので、アメは $A_{(8\mod 5)}=A_3=3$ 個追加されます。

よって、$3$ 回の操作の後で、皿には $11$ 個のアメがあります。出力する値は $N$ で割った余りでは**ない**事に注意してください。

```input2
10 1000000000000
260522 914575 436426 979445 648772 690081 933447 190629 703497 47202
```

```output2
826617499998784056
```

答えは $32$ bit 整数型に収まらない場合があります。