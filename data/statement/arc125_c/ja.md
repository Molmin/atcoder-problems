配点 : $600$ 点

## 問題文

整数 $N$ と，長さ $K$ の単調増加な整数列 $A=(A_1,A_2,\cdots,A_K)$ が与えられます．
次の条件を満たす $(1,2,\cdots,N)$ の順列 $P$ の中で，**辞書順最小**のものを求めてください．

- $A$ は $P$ の最長増加部分列（単調増加な部分列であって，長さが最大のもの）である．
なお，$P$ は複数の最長増加部分列を持つことがあるが，そのうちの一つが $A$ に一致していればよい．

なお，問題の制約から，条件を満たす $P$ が必ず存在することが証明できます．

## 制約

- $1 \leq K \leq N \leq 2 \times 10^5$
- $1 \leq A_1 &lt; A_2 &lt; \cdots &lt; A_K \leq N$
- 入力される値はすべて整数である

## 入力

入力は以下の形式で標準入力から与えられる．

> $N$ $K$
> 
> $A_1$ $A_2$ $\cdots$ $A_K$

## 出力

答えを出力せよ．

```input1
3 2
2 3
```

```output1
2 1 3
```

$P$ の最長増加部分列が $A$ に一致するのは，$P=(2,1,3),(2,3,1)$ のときです．
このうち，辞書順最小の $(2,1,3)$ が答えになります．

```input2
5 1
4
```

```output2
5 4 3 2 1
```