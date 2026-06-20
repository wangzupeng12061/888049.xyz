---
title: "NFS-Ganesha Cache Hit Rate: Define the Metric Before Sampling It"
description: "Understanding cache hit rate through request paths without collapsing different cache layers into one number."
published: 2026-06-10
category: "Storage Systems"
lang: en
tags: ["NFS-Ganesha", "Cache", "Observability"]
---

“What is the cache hit rate?” looks like a simple question. In practice, it first requires four definitions: which cache layer, which object type, which time window, and which request set forms the denominator.

## Model the request path

After an NFS request enters Ganesha, it may involve metadata, attribute and directory-entry caches, as well as the backend file system's page cache. A local counter can easily turn “the backend was not called” into the incorrect claim that “the data cache hit.”

An interpretable metric needs an explicit denominator. An attribute-cache hit rate, for example, should be divided by queries answerable by that cache rather than by all NFS operations. Cross-layer aggregation must also avoid counting one request more than once.

## Observation boundaries

It is useful to record three groups together: operations at the entry point, calls from Ganesha to FSAL, and actual backend I/O. They form a causal chain that can be checked. A single metric is useful for alerting; multiple aligned metrics are needed for diagnosis.

Short windows are sensitive to bursts, while lifetime totals hide change. A practical setup keeps monotonically increasing counters and computes rates and ratios over several windows in the collection layer.

## Conclusion

More cache metrics are not automatically better. The useful ones correspond to a clear request path, support falsification, and preserve their meaning across configuration and version changes.
