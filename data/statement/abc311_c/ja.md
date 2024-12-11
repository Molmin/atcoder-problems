配点 : $350$ 点

## 問題文

$N$ 頂点 $N$ 辺の有向グラフがあります。<br>
$i$ 番目の辺は頂点 $i$ から 頂点 $A_i$ に伸びます。 ( $i \neq A_i$ であることは制約より保証されます )<br>
同一頂点を複数回含まない有向閉路をひとつ求めてください。<br>
なお、この問題の制約下で答えが存在することが示せます。  

### 注釈

この問題では、有向閉路とは以下の条件を全て満たす頂点の列 $B=(B_1,B_2,\dots,B_M)$ であるとします。

- $M \ge 2$
- $B_i$ から $B_{i+1}$ に辺が伸びている。 ( $1 \le i \le M-1$ )
- $B_M$ から $B_1$ に辺が伸びている。
- $i \neq j$ ならば $B_i \neq B_j$

## 制約

- 入力は全て整数
- $2 \le N \le 2 \times 10^5$
- $1 \le A_i \le N$
- $A_i \neq i$

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $A_1$ $A_2$ $\dots$ $A_N$

## 出力

以下の形式で出力せよ。

> $M$
> 
> $B_1$ $B_2$ $\dots$ $B_M$

$M$ は出力する有向閉路の頂点数であり、 $B_i$ は有向閉路の $i$ 番目の頂点である。<br>
出力は以下の条件を満たす必要がある。

- $2 \le M$
- $B_{i+1} = A_{B_i}$ ( $1 \le i \le M-1$ )
- $B_{1} = A_{B_M}$
- $B_i \neq B_j$ ( $i \neq j$ )

答えとして考えられるものが複数ある場合、どれを出力しても正解となる。

```input1
7
6 7 2 1 3 4 5
```

```output1
4
7 5 3 2
```

$7 \rightarrow 5 \rightarrow 3 \rightarrow 2 \rightarrow 7$ は確かに有向閉路になっています。

この入力に対応するグラフは以下の通りです。

![](https://img.atcoder.jp/abc311/0ab396c54e276edb27de02ad3b20cf7f.png)

他の正解となる出力の例は以下の通りです。

```output1
4
2 7 5 3
```

```output1
3
4 1 6
```

グラフが連結であるとは限らないことに注意してください。

```input2
2
2 1
```

```output2
2
1 2
```

$1 \rightarrow 2$ と $2 \rightarrow 1$ の辺が双方存在するケースです。<br>
この場合、 $1 \rightarrow 2 \rightarrow 1$ は確かに有向閉路になっています。

この入力に対応するグラフは以下の通りです。<br>
図中 $1 \leftrightarrow 2$ で $1 \rightarrow 2$ と $2 \rightarrow 1$ の辺が双方あることを表現しています。

![](https://img.atcoder.jp/abc311/97e8121c1e36bbcefae0b68e1b8fbfd2.png)

```input3
8
3 7 4 7 3 3 8 2
```

```output3
3
2 7 8
```

この入力に対応するグラフは以下の通りです。

![](https://img.atcoder.jp/abc311/c31a7153e0ca36e8c0e1dd4c7bfe5329.png)