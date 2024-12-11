配点 : $600$ 点

## 問題文

長さ $N$ の数列 $A=(A_0,A_1,\ldots,A_{N-1})$ と $B=(B_0,B_1,\ldots,B_{N-1})$ が与えられます。<br>
また、高橋君は数列 $A$ に対して、次の操作を好きな回数 ( $0$ 回でもよい) 行う事ができます。

- $A$ を $1$ つ左にシフトする、すなわち、$A$ を、$A'_i=A_{(i+1)\% N}$ で定義される $A'$ で置き換える。ただし、$x\% N$ で、$x$ を $N$ で割った余りを表す。

高橋君の目的は $\displaystyle\sum_{i=0}^{N-1} (A_i|B_i)$ を最大化することです。ただし、$x|y$ で $x$ と $y$ のビット毎の論理和(bitwise OR)を表します。

$\displaystyle\sum_{i=0}^{N-1} (A_i|B_i)$ の値としてあり得る最大の値を求めてください。

 
ビット毎の論理和(bitwise OR)とは 
$1$ ビットの数字 ($0$ または $1$) の組に対して下の表で定義される演算を**論理和**（またはOR演算）といいます。
ビット毎に論理和を適用する演算を**ビット毎の論理和（bitwise OR）**といいます。

 $x$ 
 $y$ 
 $x|y$ 

$0$
$0$
$0$

$0$
$1$
$1$

$1$
$0$
$1$

$1$
$1$
$1$

論理和ではビット $x$, $y$ の少なくとも一方が $1$ の場合に結果が $1$ となります。
逆に言うと、共に $0$ の場合のみ結果が $0$ となります。

### 具体例

```plain
0110 | 0101 = 0111
```

## 制約

- $2 \leq N \leq 5\times 10^5$
- $0\leq A_i,B_i \leq 31$
- 入力はすべて整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $A_0$ $A_1$ $\ldots$ $A_{N-1}$
> 
> $B_0$ $B_1$ $\ldots$ $B_{N-1}$

## 出力

$\displaystyle\sum_{i=0}^{N-1} (A_i|B_i)$ の値としてあり得る最大の値を出力せよ。

```input1
3
0 1 3
0 2 3
```

```output1
8
```

高橋君が一度も操作を行わなかった時、$A$ は $(0,1,3)$ のままであり、$\displaystyle\sum_{i=0}^{N-1} (A_i|B_i)=(0|0)+(1|2)+(3|3)=0+3+3=6$,<br>
高橋君が $1$ 回操作を行った時、$A=(1,3,0)$ となり、$\displaystyle\sum_{i=0}^{N-1} (A_i|B_i)=(1|0)+(3|2)+(0|3)=1+3+3=7$,<br>
高橋君が $2$ 回操作を行った時、$A=(3,0,1)$ となり、$\displaystyle\sum_{i=0}^{N-1} (A_i|B_i)=(3|0)+(0|2)+(1|3)=3+2+3=8$<br>
となります。$3$ 回以上操作を行った時、 $A$ は上記のいずれかの形になるため、$\displaystyle\sum_{i=0}^{N-1} (A_i|B_i)$ の最大値は $8$ であり、$8$ を出力します。

```input2
5
1 6 1 4 3
0 6 4 0 1
```

```output2
23
```

最大となるのは高橋君が $3$ 回操作を行った時であり、この時 $A=(4,3,1,6,1)$ となり、<br>
$\displaystyle\sum_{i=0}^{N-1} (A_i|B_i)=(4|0)+(3|6)+(1|4)+(6|0)+(1|1)=4+7+5+6+1=23$ となります。