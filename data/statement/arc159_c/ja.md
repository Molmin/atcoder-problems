配点 : $500$ 点

## 問題文

正整数列 $A=(a_1,\ldots,a_N)$ が与えられます。  

次の操作を $0$ 回以上 $10^4$ 回以下繰り返すことで $A$ の値をすべて等しくできるかを判定し、可能な場合は操作列の一例を示してください。

- $(1,\ldots,N)$ の順列 $(p_1,\ldots,p_N)$ を決め、$A$ を $(a_1+p_1,\ldots,a_N+p_N)$ に置き換える。

## 制約

- $2 \leq N \leq 50$
- $1 \leq a_i \leq 50$
- 入力はすべて整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $a_1$ $\ldots$ $a_N$

## 出力

$A$ の値をすべて等しくできない場合は `No` と出力せよ。<br>
等しくできる場合、操作回数を $M$ 回、$i$ 回目の操作における順列を $(p_{i,1},\ldots,p_{i,N})$ として以下の形式で出力せよ。

> Yes
> 
> $M$
> 
> $p_{1,1}$ $\ldots$ $p_{1,N}$
> 
> $\vdots$
> 
> $p_{M,1}$ $\ldots$ $p_{M,N}$

答えが複数存在する場合はどれを出力しても正解とみなされる。

```input1
2
15 9
```

```output1
Yes
8
1 2
1 2
1 2
1 2
2 1
1 2
1 2
1 2
```

この出力例の通りに $8$ 回の操作を行うことで $A$ は $(24,24)$ となり、値がすべて等しくなります。

```input2
5
1 2 3 10 10
```

```output2
No
```

```input3
4
1 1 1 1
```

```output3
Yes
0
```

初めから $A$ の値がすべて等しいです。