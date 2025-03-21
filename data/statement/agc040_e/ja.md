配点 : $1400$ 点

## 問題文

すぬけくんは，長さ $N$ の整数列 $x_1,x_2,\cdots,x_N$ を持っています．
最初，$x$ の全ての要素は $0$ です．

すぬけくんは，以下の $2$ 種類の操作を好きな順序で好きな回数行うことができます．

- 操作 $1$: 整数 $k$ ($1 \leq k \leq N$)，及び長さ $k$ の非負整数列 $c_1,c_2,\cdots,c_k$ を自由に選ぶ．
ただし，$c$ は**広義単調増加**でなくてはならない．
そして，すべての $i$ ($1 \leq i \leq k$) について，$x_i$ を $x_i+c_i$ で置き換える．
- 操作 $2$: 整数 $k$ ($1 \leq k \leq N$)，及び長さ $k$ の非負整数列 $c_1,c_2,\cdots,c_k$ を自由に選ぶ．
ただし，$c$ は**広義単調減少**な数列でなくてはならない．
そして，すべての $i$ ($1 \leq i \leq k$) について，$x_{N-k+i}$ を $x_{N-k+i}+c_i$ で置き換える．

すぬけくんの目標は，全ての $i$ について，$x_i=A_i$ となるようにすることです．
すぬけくんが目標を達成するために行う操作回数の最小値を求めてください．

## 制約

- $1 \leq N \leq 2 \times 10^5$
- $1 \leq A_i \leq 10^9$
- 入力される値はすべて整数である．

## 入力

入力は以下の形式で標準入力から与えられる．

> $N$
> 
> $A_1$ $A_2$ $\cdots$ $A_N$

## 出力

すぬけくんが目標を達成するために行う操作回数の最小値を出力せよ．

```input1
5
1 2 1 2 1
```

```output1
3
```

例えば，以下のように $3$ 回の操作を行えば良いです．
$3$ 回未満の操作で目標は達成できません．

- $k=2,c=(1,2)$ として，操作 $1$ を行う．操作後，$x=(1,2,0,0,0)$ となる．
- $k=3,c=(0,0,1)$ として，操作 $1$ を行う．操作後，$x=(1,2,1,0,0)$ となる．
- $k=2,c=(2,1)$ として，操作 $2$ を行う．操作後，$x=(1,2,1,2,1)$ となる．

```input2
5
2 1 2 1 2
```

```output2
2
```

```input3
15
541962451 761940280 182215520 378290929 211514670 802103642 28942109 641621418 380343684 526398645 81993818 14709769 139483158 444795625 40343083
```

```output3
7
```