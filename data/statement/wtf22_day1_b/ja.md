配点 : $1000$ 点

## 問題文

$(1,2,\cdots,N)$ の順列 $P=(P_1,P_2,\cdots,P_N)$ が与えられます．

整数の組の列 $((l_1,r_1),(l_2,r_2),\cdots,(l_k,r_k))$ であって，以下の条件をすべて満たすものを一つ求めてください．

- 列の長さ $k$ は $0 \leq k \leq N-1$ を満たす．
- $1 \leq l_i \leq r_i \leq N$ ($1 \leq i \leq k$)
- 各 $1 \leq i \leq k-1$ について，$r_{i+1} \leq l_i$ または $r_i \leq l_{i+1}$ が成立する．
- 次の操作を $k$ 回行うと，$P$ が昇順にソートされる．-   - $i$ 回目の操作: $P_{l_i}$ と $P_{r_i}$ の値を入れ替える．
ただし，$l_i=r_i$ のときは何もしない．

この問題の制約下で，条件を満たす列が必ず存在することが証明できます．

$1$ つの入力ファイルにつき，$T$ 個のテストケースに答えて下さい．

## 制約

- $1 \leq T \leq 250000$
- $1 \leq N \leq 250000$
- $P=(P_1,P_2,\cdots,P_N)$ は $(1,2,\cdots,N)$ の順列
- $1$ つの入力ファイルにつき，$N$ の総和は $250000$ を超えない．
- 入力される値はすべて整数．

## 入力

入力は以下の形式で標準入力から与えられる．

> $T$
> 
> $case_1$
> 
> $case_2$
> 
> $\vdots$
> 
> $case_T$

各テストケース $case_i$ は以下の形式である．

> $N$
> 
> $P_1$ $P_2$ $\cdots$ $P_N$

## 出力

各テストケースについて，以下の形式で答えを出力せよ．

> $k$
> 
> $l_1$ $r_1$
> 
> $l_2$ $r_2$
> 
> $\vdots$
> 
> $l_k$ $r_k$

解が複数存在する場合，どれを出力しても正解とみなされる．

```input1
3
3
2 3 1
4
4 3 2 1
1
1
```

```output1
2
2 3
1 2
3
1 4
1 1
2 3
0
```

$1$ つめのテストケースについて説明します．

この出力例はすべての条件を満たしています．
例えば $4$ 番目の条件を満たしていることは，次のように確認できます．
$P=(2,3,1)\to$($P_2,P_3$ をスワップ)$\to(2,1,3)\to$($P_1,P_2$をスワップ)$\to(1,2,3)$．

逆に，以下のような出力は正しくありません．

```output1
2
1 2
1 3
```

これは，$3$ 番目の条件を満たしていないためです．